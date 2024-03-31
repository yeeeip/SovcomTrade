import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch } from "react-redux"
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

const Button = ({ title, valueSelect, handlefunc, updateCurr }) => {
	let navigate = useNavigate()
	const SITE_URL = "https://3e98-95-26-80-219.ngrok-free.app"
	switch (valueSelect) {
		case "Дирхам":
			valueSelect = "AED"
			break
		case "Рубли":
			valueSelect = "RUB"
			break
		case "Юани":
			valueSelect = "CNY"
			break
	}

	const handleButtonClick = () => {
		axios({
			method: "POST",
			url: `${SITE_URL}/api/v1/lk/bank_accounts`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
			data: JSON.stringify({
				currency: valueSelect,
			}),
		})
			.then((response) => {
				console.log(response)
				if (response.status === 200) {
					updateCurr()
					return handlefunc()
				}
			})
			.catch((err) => {
				console.log(err)
				if (err.response.status === 401) {
					alert("Ваша сессия истекла. Войдите снова")
					navigate("/entry", { replace: true })
				}
				let response = err.response.data
				if (!response.errors) {
					dispatch(generalErrorChange(response.detail))
					dispatch(generalErrorValid(true))
					return
				}
				response.errors.map((error) => {
					switch (error.field) {
						case "debit_account_id":
							dispatch(emailValid(error.defaultMessage))
							setTimeout(() => {
								dispatch(emailValid(true))
							}, 15000)
							break
						case "credit_account_id":
							dispatch(passwordValid(error.defaultMessage))
							setTimeout(() => {
								dispatch(passwordValid(true))
							}, 15000)
							break
						case "course":
							dispatch(secondPasswordValid(error.defaultMessage))
							setTimeout(() => {
								dispatch(secondPasswordValid(true))
							}, 15000)
							break
						case "deadline":
							dispatch(phoneValid(error.defaultMessage))
							setTimeout(() => {
								dispatch(phoneValid(true))
							}, 15000)
							break
					}
				})
			})
	}
	return (
		<BuyingSellingDiv onClick={handleButtonClick}>
			<BuyingSellingA>{title}</BuyingSellingA>
		</BuyingSellingDiv>
	)
}

export default Button
