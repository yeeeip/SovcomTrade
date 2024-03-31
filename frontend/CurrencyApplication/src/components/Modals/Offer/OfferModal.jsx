import React from "react"
import styled from "styled-components"
import BackButton from "../img/back.svg"
import { Select } from "./style/Select"
import { Option } from "./style/Option"
import Button from "./style/Button"
import { Input } from "./style/Input"
import { useState } from "react"
import { useSelector } from "react-redux"
import { DoneComponent } from "./style/DoneComponent"

const OfferModalDiv = styled.div`
	position: absolute;
	top: ${(props) => (props.isModalActive ? "50%" : "-50%")};
	left: 50%;
	transform: translate(-50%, -50%);
	width: fit-content;
	height: fit-content;

	display: flex;
	z-index: 50;
	justify-content: center;
	transition: all 0.5s;
`
const OfferModalDivDiv = styled.div`
	border: 2px solid #213a8b99;
	border-radius: 4px;
	background: #f1f7ff;
	width: fit-content;
	height: fit-content;
	padding: 30px;
`
const TitleAndBack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const TitleH1 = styled.h1`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 34px;
	color: #213a8b;
`
const IntputsDiv = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 0 120px;
`
const LeftIntputsDiv = styled.div`
	display: flex;
	flex-direction: column;
`
const RightIntputsDiv = styled.div`
	display: flex;
	flex-direction: column;
`
const IntputsSpan = styled.span`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 21px;
	color: #213a8b;
	margin: 0 0 30px 0;
`
const Options = styled.ul`
	display: block;
	max-height: 250px;
	overflow-y: auto;
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
	&::-webkit-scrollbar {
		width: 10px; /* ширина scrollbar */
	}
	&::-webkit-scrollbar-track {
		background: #1d1f241a; /* цвет дорожки */
		border-radius: 0 16px 16px 0;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #213a8b; /* цвет плашки */
		border-radius: 20px; /* закругления плашки */
	}
`
const SumA = styled.a`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 14px;
	color: #213a8b;
	margin: 10px 0 0 0;
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
export const OfferModal = ({ isModalActive, handleClose }) => {
	const [swap, setSwap] = useState(true)
	const bankAccounts = useSelector((state) => state.login.bankAccounts) || []
	const modals = useSelector((state) => state.modals) || []

	const [isActiveWriteOff, setIsActiveWriteOff] = useState(false)
	const [selectedOptionWriteOff, setSelectedOptionWriteOff] = useState("Выберите счет")
	const handleToggleMenuWriteOff = () => {
		setIsActiveWriteOff(!isActiveWriteOff)
	}
	const handleSelectOptionWriteOff = (optionText) => {
		setSelectedOptionWriteOff(optionText)
		setIsActiveWriteOff(false)
	}

	const [isActiveToEnroll, setIsActiveToEnroll] = useState(false)
	const [selectedOptionToEnroll, setSelectedOptionToEnroll] = useState("Выберите счет")
	const handleToggleMenuToEnroll = () => {
		setIsActiveToEnroll(!isActiveToEnroll)
	}
	const handleSelectOptionToEnroll = (optionText) => {
		setSelectedOptionToEnroll(optionText)
		setIsActiveToEnroll(false)
	}

	const [curs, setCurs] = useState(0)
	const handleCursInput = (e) => {
		setCurs(e.target.value)
	}
	const [value, setValue] = useState(0)
	const handleValueInput = (e) => {
		setValue(e.target.value)
	}
	const SwapModals = () => {
		setSwap(!swap)
	}
	return (
		<OfferModalDiv isModalActive={isModalActive}>
			{swap && (
				<OfferModalDivDiv>
					<TitleAndBack>
						<TitleH1>Заявка на покупку/продажу от дд.мм.гг</TitleH1>
						<CustomExitButton onClick={handleClose}>
							<span></span>
							<span></span>
						</CustomExitButton>
					</TitleAndBack>
					<IntputsDiv>
						<LeftIntputsDiv>
							<IntputsSpan style={{ marginTop: "70px" }}>Списать</IntputsSpan>
							<Select
								title={`${selectedOptionWriteOff.bigDecimal || "Выберите счет"} ${selectedOptionWriteOff.currency || ""}`}
								funcHandleToggleMenu={handleToggleMenuWriteOff}
								caution={typeof modals.offerCreditAccountError == "string"}
								errorMessage={typeof modals.offerCreditAccountError == "string" ? register.offerCreditAccountError : false}
							/>
							{isActiveWriteOff && (
								<Options>
									{bankAccounts.map((item, index) => {
										if (selectedOptionWriteOff.id != item.id)
											return (
												<Option
													key={index}
													title={`${item.bigDecimal} ${item.currency}`}
													handlefunc={() => handleSelectOptionWriteOff(item)}
												/>
											)
									})}
								</Options>
							)}

							<IntputsSpan style={{ marginTop: "30px" }}>Зачислить</IntputsSpan>
							<Select
								title={`${selectedOptionToEnroll.bigDecimal || "Выберите счет"} ${selectedOptionToEnroll.currency || ""}`}
								funcHandleToggleMenu={handleToggleMenuToEnroll}
								caution={typeof modals.offerDebitAccountError == "string"}
								errorMessage={typeof modals.offerDebitAccountError == "string" ? register.offerDebitAccountError : false}
							/>
							{isActiveToEnroll && (
								<Options>
									{bankAccounts.map((item, index) => {
										if (selectedOptionToEnroll.id != item.id)
											return (
												<Option
													key={index}
													title={`${item.bigDecimal} ${item.currency}`}
													handlefunc={() => handleSelectOptionToEnroll(item)}
												/>
											)
									})}
								</Options>
							)}

							<Button
								href={"#"}
								title={"Создать заявку"}
								data={{ credit: selectedOptionWriteOff, debit: selectedOptionToEnroll, curs: curs, value: value }}
								handlefunc={SwapModals}
							/>
						</LeftIntputsDiv>

						<RightIntputsDiv>
							<IntputsSpan style={{ marginTop: "70px" }}>Желаемый курс</IntputsSpan>
							<Input
								title={"Введите сумму*"}
								handlefunc={handleCursInput}
								caution={typeof modals.offerCursError == "string"}
								errorMessage={typeof modals.offerCursError == "string" ? register.offerCursError : false}
							/>

							<IntputsSpan style={{ marginTop: "30px" }}>Сумма списания</IntputsSpan>
							<Input
								title={"Введите сумму*"}
								handlefunc={handleValueInput}
								caution={typeof modals.offerValueError == "string"}
								errorMessage={typeof modals.offerValueError == "string" ? register.offerValueError : false}
							/>
							<SumA href='#'>Списать всю сумму (число)</SumA>
							<IntputsSpan style={{ marginTop: "30px" }}>Срок заявки</IntputsSpan>
							<Input
								title={"ДД-ММ-ГГГГ Часы:Минуты:Секуды"}
								handlefunc={handleValueInput}
								caution={typeof modals.offerTimeError == "string"}
								errorMessage={typeof modals.offerTimeError == "string" ? register.offerTimeError : false}
							/>
						</RightIntputsDiv>
					</IntputsDiv>
				</OfferModalDivDiv>
			)}
			{!swap && <DoneComponent text={"Ваша заявка успешно создана"} handleClose={handleClose} />}
		</OfferModalDiv>
	)
}
