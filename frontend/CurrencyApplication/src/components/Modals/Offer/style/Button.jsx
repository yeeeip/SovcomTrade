import axios from "axios"
import styled from "styled-components"
import {
	setOfferCreditAccountError,
	setOfferCourseError,
	setOfferDebitAccountError,
	setOfferTimeError,
	setOfferValueError,
} from "../../../../redux/modalsSlice"
import { useDispatch } from "react-redux"
import { setOfferSwap } from "../../../../redux/offerModalSlice"
import { useNavigate } from "react-router-dom"

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
`
const BuyingSellingA = styled.a`
	color: white;
	display: flex;
	text-decoration: none;
	font-family: "TT Travels";
	padding: 27px 80px;
	font-size: 17px;
`

const Button = ({ title, href, data }) => {
	const SERVER_URL = process.env.REACT_APP_BACKEND_URL
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		try {
			console.log({
				debit_account_id: data.debit.id,
				credit_account_id: data.credit.id,
				course: data.curs,
				price: data.price,
				deadline: data.time + "T00:00:00",
			})
			axios({
				url: `${SERVER_URL}/api/v1/lk/operations`,
				method: "post",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${sessionStorage.getItem("token")}`,
				},
				data: JSON.stringify({
					debit_account_id: data.debit.id,
					credit_account_id: data.credit.id,
					course: data.curs,
					price: data.price,
					deadline: data.time + "T00:00:00",
				}),
			})
				.then((response) => {
					if (response.status === 200) {
						return dispatch(setOfferSwap(false))
					}
				})
				.catch((err) => {
					console.log(err)
					if (err.response.status === 401) {
						alert("Ваша сессия истекла. Войдите снова")
						navigate("/entry", { replace: true })
					}
					let response = err.response.data

					response.errors.map((error) => {
						switch (error.field) {
							case "debit_account_id":
								dispatch(setOfferDebitAccountError(error.defaultMessage))
								setTimeout(() => {
									dispatch(setOfferDebitAccountError(false))
								}, 15000)
								break
							case "credit_account_id":
								dispatch(setOfferCreditAccountError(error.defaultMessage))
								setTimeout(() => {
									dispatch(setOfferCreditAccountError(false))
								}, 15000)
								break
							case "course":
								dispatch(setOfferCourseError(error.defaultMessage))
								setTimeout(() => {
									dispatch(setOfferCourseError(false))
								}, 15000)
								break
							case "deadline":
								dispatch(setOfferTimeError(error.defaultMessage))
								setTimeout(() => {
									dispatch(setOfferTimeError(false))
								}, 15000)
								break
							case "price":
								dispatch(setOfferValueError(error.defaultMessage))
								setTimeout(() => {
									dispatch(setOfferValueError(false))
								}, 15000)
								break
						}
					})
				})
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<BuyingSellingDiv onClick={handleClick}>
			<BuyingSellingA href={href}>{title}</BuyingSellingA>
		</BuyingSellingDiv>
	)
}

export default Button
