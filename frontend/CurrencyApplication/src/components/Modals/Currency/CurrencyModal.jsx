import React from "react"
import styled from "styled-components"
import { useState } from "react"
import { Select } from "./style/Select"
import { Option } from "./style/Option"
import Button from "./style/Button"
import { DoneComponent } from "./style/DoneComponent"
import { useDispatch, useSelector } from "react-redux"
import { setCurrencyOpen } from "../../../redux/currencyModalSlice"

const CurrencyModalDivDiv = styled.div`
	position: absolute;
	top: ${(props) => (props.isModalActive ? "50%" : "-50%")};
	left: 50%;
	transform: translate(-50%, -50%);
	width: fit-content;
	height: fit-content;

	display: flex;
	justify-content: center;
	transition: all 0.5s;
`
const CurrencyModalDiv = styled.div`
	padding: 30px;
	border: 2px solid #213a8b99;
	background: #f1f7ff;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
const Options = styled.ul`
	display: block;
	width: 100%;
	height: fit-content;
	padding: 40px 0 8px 0;
	margin-top: -35px;
	border-radius: 16px;
	background: #1d1f241a;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	& > *:not(:last-child) {
		margin-bottom: 8px;
	}
`
const TextAndBack = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 40px;
	justify-content: space-between;
	width: 100%;
`
const TitleH2 = styled.h2`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 40px;
	color: #213a8b;
	width: fit-content;
`
const CurrencyModalSpan = styled.span`
	font-family: "TT Travels";
	width: 100%;
	margin-bottom: 24px;
	font-weight: 500;
	font-size: 24px;
	color: #213a8b;
`
const CustomExitButton = styled.div`
	width: 44px;
	height: 44px;
	z-index: 51;
	position: relative;
	cursor: pointer;
	& > * {
		width: 100%;
		height: 2px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: #c7c8c9;
	}

	& > *:first-child {
		transform: rotate(45deg);
	}
	& > *:last-child {
		transform: rotate(-45deg);
	}
`
export const CurrencyModal = ({ updateCurr }) => {
	const [isActive, setIsActive] = useState(false)
	const currencyModalData = useSelector((state) => state.currencyModal)
	const dispatch = useDispatch()
	const [swap, setSwap] = useState(true)
	const [selectedOption, setSelectedOption] = useState("Рубли")

	const handleToggleMenu = () => {
		setIsActive(!isActive)
	}

	const handleSelectOption = (optionText) => {
		setSelectedOption(optionText)
		setIsActive(false)
	}
	const SwapModals = () => {
		setSwap(!swap)
	}
	return (
		<CurrencyModalDivDiv isModalActive={currencyModalData.currencyOpen}>
			{currencyModalData.currencySwap && (
				<CurrencyModalDiv>
					<TextAndBack>
						<TitleH2>Открыть счет</TitleH2>
						<CustomExitButton onClick={() => dispatch(setCurrencyOpen(false))}>
							<span></span>
							<span></span>
						</CustomExitButton>
					</TextAndBack>
					<CurrencyModalSpan>Валюта</CurrencyModalSpan>
					<Select title={selectedOption} funcHandleToggleMenu={handleToggleMenu} isActive={isActive} />
					{isActive && (
						<Options>
							{selectedOption !== "Рубли" && <Option title={"Рубли"} handlefunc={() => handleSelectOption("Рубли")}></Option>}
							{selectedOption !== "Дирхам" && <Option title={"Дирхам"} handlefunc={() => handleSelectOption("Дирхам")}></Option>}
							{selectedOption !== "Юань" && <Option title={"Юань"} handlefunc={() => handleSelectOption("Юань")}></Option>}
						</Options>
					)}
					<Button href={"#"} title={"Открыть счет"} valueSelect={selectedOption} handlefunc={SwapModals} updateCurr={updateCurr} />
				</CurrencyModalDiv>
			)}
			{!currencyModalData.currencySwap && <DoneComponent text={"Ваш счет успешно создан."} />}
		</CurrencyModalDivDiv>
	)
}
