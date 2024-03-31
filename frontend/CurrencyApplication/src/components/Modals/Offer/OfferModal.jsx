import React from "react"
import styled from "styled-components"
import BackButton from "../img/back.svg"
import { Select } from "./style/Select"
import { Option } from "./style/Option"
import Button from "./style/Button"
import { Input } from "./style/Input"
import { useState } from "react";

const OfferModalDiv = styled.div`
	display: flex;
	justify-content: center;
`
const OfferModalDivDiv = styled.div`
	margin-top: 90px;
	width: 1000px;
	height: 100%;
	padding: 0 30px;
`
const TitleAndBack = styled.div`
	display: flex;
	justify-content: space-between;

`
const TitleH1 = styled.h1`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 34px;
	color: #213A8B;
`
const IntputsDiv = styled.div`
	display: flex;
	justify-content: space-between;
`
const LeftIntputsDiv= styled.div`
	display: flex;
	flex-direction: column;
`
const RightIntputsDiv= styled.div`
	display: flex;
	flex-direction: column;
`
const IntputsSpan = styled.span`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 21px;
	color: #213A8B;
	margin: 0 0 30px 0;
`
const Options = styled.ul`
	position: relative;
	padding-bottom: 10px;
	width: 400px;
    margin-top: 10px;
    border-radius: 40px;
    background: #1D1F241A;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    display: block;
`
const SumA = styled.a`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 14px;
	color: #213A8B;
	margin: 10px 0 0 0;
`

export const OfferModal = () => {
	const [isActiveWriteOff, setIsActiveWriteOff] = useState(false);
	const [selectedOptionWriteOff, setSelectedOptionWriteOff] = useState('Выберите счет');
	const handleToggleMenuWriteOff = () => {
        setIsActiveWriteOff(!isActiveWriteOff);
    };
    const handleSelectOptionWriteOff = (optionText) => {
        setSelectedOptionWriteOff(optionText);
		setIsActiveWriteOff(false);
    };

	const [isActiveToEnroll, setIsActiveToEnroll] = useState(false);
	const [selectedOptionToEnroll, setSelectedOptionToEnroll] = useState('Выберите счет');
	const handleToggleMenuToEnroll = () => {
        setIsActiveToEnroll(!isActiveToEnroll);
    };
    const handleSelectOptionToEnroll = (optionText) => {
        setSelectedOptionToEnroll(optionText);
		setIsActiveToEnroll(false);
    };

	const [isActive, setIsActive] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Выберите курс');
	
	const handleToggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleSelectOption = (optionText) => {
        setSelectedOption(optionText);
		setIsActive(false);
    };

	return(
		<OfferModalDiv>
			<OfferModalDivDiv>
				<TitleAndBack>
					<TitleH1>Заявка на покупку/продажу от дд.мм.гг</TitleH1>
					<img src={BackButton}/>
				</TitleAndBack>
				<IntputsDiv>
					<LeftIntputsDiv>

						<IntputsSpan style={{marginTop:"70px"}}>Списать</IntputsSpan>
						<Select title={selectedOptionWriteOff} funcHandleToggleMenu={handleToggleMenuWriteOff}/>
						{isActiveWriteOff && (
							<Options>
								<Option title={"1. 0 DH"} handlefunc={() => handleSelectOptionWriteOff("1. 0 DH")}></Option>
								<Option title={"2. 0 ¥"} handlefunc={() => handleSelectOptionWriteOff("2. 0 ¥")}></Option>
							</Options>
						)}

						<IntputsSpan style={{marginTop:"30px"}}>Зачислить</IntputsSpan>
						<Select title={selectedOptionToEnroll} funcHandleToggleMenu={handleToggleMenuToEnroll}/>
						{isActiveToEnroll && (
							<Options>
								<Option title={"1. 0 DH"} handlefunc={() => handleSelectOptionToEnroll("1. 0 DH")}></Option>
								<Option title={"2. 0 ¥"} handlefunc={() => handleSelectOptionToEnroll("2. 0 ¥")}></Option>
							</Options>
						)}

						<Button href={"#"} title={"Создать заявку"}/>

					</LeftIntputsDiv>

					<RightIntputsDiv>

						<IntputsSpan style={{marginTop:"70px"}}>Желаемый курс</IntputsSpan>
						<Select title={selectedOption} funcHandleToggleMenu={handleToggleMenu}/>
						{isActive && (
							<Options>
								<Option title={"Рубли"} handlefunc={() => handleSelectOption('Рубли')} ></Option>
								<Option title={"Дирхам"} handlefunc={() => handleSelectOption('Дирхам')}></Option>
								<Option title={"Юань"} handlefunc={() => handleSelectOption('Юань')}></Option>
							</Options>
						)}

						<IntputsSpan style={{marginTop:"30px"}}>Сумма списания</IntputsSpan>
						<Input title={"Введите сумму*"}/>
						<SumA href="#">Списать всю сумму (число)</SumA>

					</RightIntputsDiv>
				</IntputsDiv>
			</OfferModalDivDiv>
		</OfferModalDiv>
	)
}
