import React from "react"
import styled from "styled-components"
import { useState } from "react"
import { Select } from "./style/Select"
import { Option } from "./style/Option"

const CurrencyModalDiv = styled.div``
const Options = styled.ul`
	position: relative;
	padding-bottom: 10px;
	width: 400px;
	margin-top: 10px;
	border-radius: 40px;
	background: #1d1f241a;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
	display: block;
`

export const CurrencyModal = () => {
	const [isActive, setIsActive] = useState(true)
	const [selectedOption, setSelectedOption] = useState("Выберите валюту")

	const handleToggleMenu = () => {
		setIsActive(!isActive)
	}

	const handleSelectOption = (optionText) => {
		console.log("test")
		setSelectedOption(optionText)
		// setIsActive(false);
	}
	return (
		<CurrencyModalDiv>
			<Select title={selectedOption} handlefunc={handleToggleMenu} />
			{isActive && (
				<Options>
					<Option title={"Рубли"} handlefunc={handleSelectOption} />
					<Option title={"Дирхам"} handlefunc={handleSelectOption} />
					<Option title={"Юань"} handlefunc={handleSelectOption} />
				</Options>
			)}
		</CurrencyModalDiv>
	)
}
