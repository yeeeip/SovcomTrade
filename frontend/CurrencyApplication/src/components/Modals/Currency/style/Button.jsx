import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setCurrencySwap } from "../../../../redux/currencyModalSlice"
import { generalErrorValid, generalErrorChange } from "../../../../redux/registerSlice"
import axiosRetry from "axios-retry"
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay })
const BuyingSellingDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 400px;
	height: 70px;
	border-radius: 40px;
	margin-bottom: 20px;
	background: #da5155;
	margin-top: 25px;
	cursor: pointer;
`
const BuyingSellingA = styled.a`
	color: white;
	display: flex;
	text-decoration: none;
	font-family: "TT Travels";
	padding: 27px 80px;
	font-size: 21px;
`

const Button = ({ title, valueSelect, updateCurr }) => {
	let navigate = useNavigate()
	let dispatch = useDispatch()
	const SERVER_URL = process.env.REACT_APP_BACKEND_URL

	const handleButtonClick = () => {
		try {
			let temp = null
			switch (valueSelect) {
				case "Дирхам":
					temp = "AED"
					break
				case "Рубли":
					temp = "RUB"
					break
				case "Юани":
					temp = "CNY"
					break
			}
			axios({
				method: "POST",
				url: `${SERVER_URL}/api/v1/lk/bank_accounts`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${sessionStorage.getItem("token")}`,
				},
				data: JSON.stringify({
					currency: temp,
				}),
			})
				.then((response) => {
					if (response.status === 200) {
						updateCurr()
						return dispatch(setCurrencySwap(false))
					}
				})
				.catch((err) => {
					console.log(err)
					if (err.response.status === 401) {
						dispatch(generalErrorChange("Ваша сессия истекла. Войдите снова"))
						dispatch(generalErrorValid(true))
						setTimeout(() => {
							dispatch(generalErrorChange(null))
							dispatch(generalErrorValid(false))
						}, 20000)
						navigate("/", { replace: true })
					}
				})
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<BuyingSellingDiv onClick={handleButtonClick}>
			<BuyingSellingA>{title}</BuyingSellingA>
		</BuyingSellingDiv>
	)
}

export default Button
