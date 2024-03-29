import React from "react"
import styled from "styled-components";
import { useState } from "react";
import { Select } from "./style/Select";
import { Option } from "./style/Option";
import Button from "./style/Button";
import BackButton from "../img/back.svg";

const CurrencyModalDivDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background: #F1F7FF;
`
const CurrencyModalDiv = styled.div`
	width: 520px;
    height: 355px;
	margin-top: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
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
const TextAndBack = styled.div`
	display: flex;
	width: 400px;
	align-items: center;
`
const TitleH1 = styled.h1`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 34px;
	color: #213A8B;
`
const CurrencyModalSpan = styled.span`
	width: 400px;
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 24px;
	color: #213A8B;
	margin: 45px 0 20px 0;
`


export const CurrencyModal = () => {
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
		<CurrencyModalDivDiv>
			<CurrencyModalDiv>
				<TextAndBack>
					<TitleH1>Открыть</TitleH1>
					<a href=""><img style={{paddingLeft:"265px"}} src={BackButton}/></a>
				</TextAndBack>
				<CurrencyModalSpan>Валюта</CurrencyModalSpan>
				<Select title={selectedOption} funcHandleToggleMenu={handleToggleMenu}/>
				{isActive && (
					<Options>
						<Option title={"Рубли"} handlefunc={() => handleSelectOption('Рубли')} ></Option>
						<Option title={"Дирхам"} handlefunc={() => handleSelectOption('Дирхам')}></Option>
						<Option title={"Юань"} handlefunc={() => handleSelectOption('Юань')}></Option>
					</Options>
				)}
				<Button href={"#"} title={"Открыть счет"}/>
			</CurrencyModalDiv>
		</CurrencyModalDivDiv>
	)	
}
