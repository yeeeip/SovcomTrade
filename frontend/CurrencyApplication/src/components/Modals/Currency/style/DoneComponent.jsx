import React from "react"
import styled from "styled-components"
import DoneImg from "../../img/done.svg"
import { setCurrencyOpen, setCurrencySwap } from "../../../../redux/currencyModalSlice"
import { useDispatch } from "react-redux"

const CustomContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 32px;
	display: flex;
	flex-direction: column;
	gap: 24px 0;
	align-items: center;
	background: white;
	border: 2px solid #213a8b99;
	border-radius: 40px;
	z-index: 770;
`
const CustomImg = styled.img`
	max-width: 70px;
	max-height: 70px;
	width: 100%;
	height: 100%;
`
const CustomText = styled.p`
	font-family: "TT Travels";
	font-size: 16px;
	color: #213a8b;
`

const CustomButton = styled.button`
	background: #f1f7ff;
	border: 2px solid #213a8b99;
	border-radius: 40px;
	padding: 10px 12px;
	color: #213a8b;
	cursor: pointer;
	font-family: "TT Travels";
	font-size: 16px;
	font-weight: 500;
`
export const DoneComponent = ({ text }) => {
	const dispatch = useDispatch()
	return (
		<CustomContainer>
			<CustomImg src={DoneImg} />
			<CustomText>{text}</CustomText>
			<CustomButton
				onClick={() => {
					dispatch(setCurrencyOpen(false))

					setTimeout(() => {
						dispatch(setCurrencySwap(true))
					}, 500)
				}}
			>
				Выйти
			</CustomButton>
		</CustomContainer>
	)
}
