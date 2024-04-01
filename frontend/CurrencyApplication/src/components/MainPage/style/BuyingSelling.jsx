import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { setOfferOpen, setOfferSwap } from "../../../redux/offerModalSlice"
import { setCurrencyOpen, setCurrencySwap } from "../../../redux/currencyModalSlice"

const CustomButton = styled.button`
	width: 100%;
	border-radius: 40px;
	background: #da5155;
	padding: 24px;
	text-align: center;
	color: #fdfdfd;
	font-family: "TT Travels";
	font-weight: 500;
	text-decoration: none;
	font-size: 24px;
	border: none;
	cursor: pointer;
	@media (max-width: 1400px) {
		padding: 16px;
		font-size: 20px;
	}
`

const ButtonOpen = ({ title }) => {
	const dispatch = useDispatch()
	return (
		<CustomButton
			onClick={() => {
				dispatch(setOfferOpen(true))
				dispatch(setOfferSwap(true))
				dispatch(setCurrencyOpen(false))
				dispatch(setCurrencySwap(true))
			}}
		>
			{title}
		</CustomButton>
	)
}

export default ButtonOpen
