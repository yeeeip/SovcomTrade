import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import {
	emailChange,
	passwordChange,
	secondPasswordChange,
	phoneChange,
	firstNameChange,
	secondNameChange,
	middleNameChange,
} from "../../../redux/registerSlice"
import { SmallGreyText } from "./SmallGreyText"
const CustomTitle = styled.p`
	font-family: "TT Travels";
	font-weight: normal;
	font-size: 24px;
	color: ${(props) => (props.caution === true ? "#DA5155" : "#213A8B")};
	@media (max-width: 1200px) {
		font-size: 20px;
		padding: 10px;
	}
	@media (max-width: 1100px) {
		font-size: 16px;
		padding: 8px;
	}
	@media (max-width: 900px) {
		font-size: 13px;
		padding: 6px;
	}
	@media (max-width: 285px) {
		font-size: 11px;
		padding: 6px;
	}
`

const CustomInput = styled.input`
	border: 2px solid ${(props) => (props.caution === true ? "#DA5155" : "#213A8B")};
	border-radius: 20px;
	padding: 15px;
	font-family: "TT Travels";
	font-weight: normal;
	font-size: 24px;
	&:focus {
		outline: none;
	}
	@media (max-width: 1100px) {
		font-size: 16px;
		padding: 10px;
	}@media (max-width: 900px) {
		font-size: 13px;
		padding: 8px;
	}
	@media (max-width: 285px) {
		font-size: 11px;
		padding: 5px;
	}
`

const CustomInputField = styled.div`
	display: flex;
	flex-direction: column;
	& > *:not(:last-child) {
		margin-bottom: 16px;
		@media (max-width: 1200px) {
			margin-bottom: 8px;
		}
		@media (max-width: 1100px) {
			margin-bottom: 0px;
		}
	}
`

export const Input = ({ title, target, caution, errorMessage }) => {
	const [phoneNumber, setPhoneNumber] = useState("")
	const handlePhoneChange = (e) => {
		let inputValue = e.target.value.replace(/\D/g, "") // Удаляем все нечисловые символы

		if (inputValue.length > 0) {
			if (inputValue[0] !== "7") {
				inputValue = "7" + inputValue
			}

			if (inputValue.length <= 1) {
				inputValue = "+" + inputValue
			} else if (inputValue.length <= 2) {
				inputValue = "+" + inputValue.substring(0, 1) + " (" + inputValue.substring(1)
			} else if (inputValue.length <= 5) {
				inputValue = "+" + inputValue.substring(0, 1) + " (" + inputValue.substring(1, 4) + ") " + inputValue.substring(4)
			} else {
				inputValue =
					"+" + inputValue.substring(0, 1) + " (" + inputValue.substring(1, 4) + ") " + inputValue.substring(4, 7) + "-" + inputValue.substring(7, 11)
			}
		}

		setPhoneNumber(inputValue)
	}

	const dispatch = useDispatch()

	const props = {
		caution: caution,
		onChange: (e) => {
			switch (target) {
				case "email":
					dispatch(emailChange(e.target.value))
					break
				case "password":
					dispatch(passwordChange(e.target.value))
					break
				case "secondPassword":
					dispatch(secondPasswordChange(e.target.value))
					break
				case "phone":
					handlePhoneChange(e)
					dispatch(phoneChange(e.target.value))
					break
				case "firstName":
					dispatch(firstNameChange(e.target.value))
					break
				case "secondName":
					dispatch(secondNameChange(e.target.value))
					break
				case "middleName":
					dispatch(middleNameChange(e.target.value))
					break
			}
		},
	}
	if (target === "phone") {
		props["value"] = phoneNumber
	}
	return (
		<CustomInputField>
			<CustomTitle caution={caution}>{title}</CustomTitle>
			<CustomInput {...props} />
			{caution && <SmallGreyText style={{ color: "red" }}>{errorMessage}</SmallGreyText>}
		</CustomInputField>
	)
}
