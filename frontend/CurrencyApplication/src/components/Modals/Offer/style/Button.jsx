import axios from "axios"
import styled from "styled-components"
import { setOfferCreditAccountError, setOfferCursError, setOfferDebitAccountError, setOfferTimeError } from "../../../../redux/modalsSlice"
import { useDispatch } from "react-redux"

const BuyingSellingDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 298px;
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

const Button = ({ title, href, data, handlefunc }) => {
	const SITE_URL = "https://3e98-95-26-80-219.ngrok-free.app"
	const dispatch = useDispatch()
	const handleClick = () => {
		parseDataDate()
		axios({
			url: `${SITE_URL}/`,
			method: "post",
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
			data: JSON.stringify({
				debit_account_id: data.debit,
				credit_account_id: data.credit,
				course: data.curs,
				deadline: data.value,
			}),
		})
			.then((response) => {
				if (response.status === 200) {
					updateCurr()
					return handlefunc()
				}
			})
			.catch((err) => {
				handlefunc()
				console.log(err)
				if (err.response.status === 401) {
					alert("Ваша сессия истекла. Войдите снова")
					navigate("/entry", { replace: true })
				}
				// let response = err.response.data

				// response.errors.map((error) => {
				// 	switch (error.field) {
				// 		case "debit_account_id":
				// 			dispatch(setOfferDebitAccountError(error.defaultMessage))
				// 			setTimeout(() => {
				// 				dispatch(setOfferDebitAccountError(true))
				// 			}, 15000)
				// 			break
				// 		case "credit_account_id":
				// 			dispatch(setOfferCreditAccountError(error.defaultMessage))
				// 			setTimeout(() => {
				// 				dispatch(setOfferCreditAccountError(true))
				// 			}, 15000)
				// 			break
				// 		case "course":
				// 			dispatch(setOfferCursError(error.defaultMessage))
				// 			setTimeout(() => {
				// 				dispatch(setOfferCursError(true))
				// 			}, 15000)
				// 			break
				// 		case "deadline":
				// 			dispatch(setOfferTimeError(error.defaultMessage))
				// 			setTimeout(() => {
				// 				dispatch(setOfferTimeError(true))
				// 			}, 15000)
				// 			break
				// 	}
				//})
			})
	}
	const parseDataDate = () => {
		let res = data.value.match(/([0-9]{1,2})-([0-9]{1,2})-([0-9]{4}) ([0-9]{2})\:([0-9]{2})\:([0-9]{2})/)
		console.log(data.value)
		data.value = `${res[3]}-${res[2]}-${res[1]}T${res[4]}:${res[5]}:${res[6]}`
	}
	return (
		<BuyingSellingDiv onClick={handleClick}>
			<BuyingSellingA href={href}>{title}</BuyingSellingA>
		</BuyingSellingDiv>
	)
}

export default Button
