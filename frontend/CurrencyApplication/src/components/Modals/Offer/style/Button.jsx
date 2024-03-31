import axios from "axios"
import styled from "styled-components"
import { setOfferCreditAccountError, setOfferCursError, setOfferDebitAccountError, setOfferTimeError } from "../../../../redux/modalsSlice"

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

const Button = ({ title, href, data }) => {
	const SITE_URL = ""
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
							dispatch(setOfferDebitAccountError(error.defaultMessage))
							setTimeout(() => {
								dispatch(setOfferDebitAccountError(true))
							}, 15000)
							break
						case "credit_account_id":
							dispatch(setOfferCreditAccountError(error.defaultMessage))
							setTimeout(() => {
								dispatch(setOfferCreditAccountError(true))
							}, 15000)
							break
						case "course":
							dispatch(setOfferCursError(error.defaultMessage))
							setTimeout(() => {
								dispatch(setOfferCursError(true))
							}, 15000)
							break
						case "deadline":
							dispatch(setOfferTimeError(error.defaultMessage))
							setTimeout(() => {
								dispatch(setOfferTimeError(true))
							}, 15000)
							break
					}
				})
			})
	}
	const parseDataDate = () => {
		let res = data.value.match(/([0-9]{1,2})-([0-9]{1,2})-([0-9]{4}) ([0-9]{2})\:([0-9]{2})\:([0-9]{2})/)
		data.value = `${res[3]}-${res[2]}-${res[1]}T${res[4]}:${res[5]}:${res[6]}`
	}
	return (
		<BuyingSellingDiv onClick={handleClick}>
			<BuyingSellingA href={href}>{title}</BuyingSellingA>
		</BuyingSellingDiv>
	)
}

export default Button
