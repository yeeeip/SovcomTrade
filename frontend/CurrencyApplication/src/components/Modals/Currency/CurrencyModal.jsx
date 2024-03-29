import React from "react"
import styled from "styled-components";
import { useState } from "react";
import { Select } from "./style/Select";
import { Option } from "./style/Option";

const CurrencyModalDiv = styled.div`
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

export const CurrencyModal = () => {
	const [isActive, setIsActive] = useState(true);
	const [selectedOption, setSelectedOption] = useState('Выберите валюту');
	
	const handleToggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleSelectOption = (optionText) => {
        setSelectedOption(optionText);
        // setIsActive(false);
    };
	return(
		<CurrencyModalDiv>
			 <Select title={selectedOption} onClick={handleToggleMenu}/>
			{isActive && (
				<Options>
					<Option title={"Рубли"} onClick={() => handleSelectOption('Рубли')} ></Option>
					<Option title={"Дирхам"} onClick={() => handleSelectOption('Дирхам')}></Option>
					<Option title={"Юань"} onClick={() => handleSelectOption('Юань')}></Option>
				</Options>
			)}
		</CurrencyModalDiv>
	)	
}
