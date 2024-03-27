import React from "react"
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
const CustomTitle = styled.p`
	font-family: "TT Travels";
	font-weight: normal;
	font-size: 24px;
	color: ${(props) => (props.caution ? "#DA5155" : "#213A8B")};
`

const CustomInput = styled.input`
	border: 2px solid ${(props) => (props.caution ? "#DA5155" : "#213A8B")};
	border-radius: 20px;
	padding: 25px;
	font-family: "TT Travels";
	font-weight: normal;
	font-size: 24px;
	&:focus {
		outline: none;
	}
`

const CustomInputField = styled.div`
	display: flex;
	flex-direction: column;
	& > *:not(:last-child) {
		margin-bottom: 16px;
	}
`

export const Input = ({ title, target }) => {
	const dispatch = useDispatch()
	return (
		<CustomInputField>
			<CustomTitle>{title}</CustomTitle>
			<CustomInput
				onChange={(e) => {
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
				}}
			/>
		</CustomInputField>
	)
}
