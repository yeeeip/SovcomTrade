import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { emailChange, emailValid } from "../../redux/emailSlice"
import { passwordChange, passwordValid, passwordRepeated } from "../../redux/passwordSlice"

const CustomTitle = styled.p`
	font-family: "TT Travels";
	font-weight: normal;
	font-size: 24px;
	color: ${(props) => (props.color ? props.color : "black")};
`

const CustomInput = styled.input`
	border: 2px solid rgba(21, 25, 28, 0.25);
	border-radius: 20px;
	padding: 25px;
	font-family: "TT Travels";
	font-weight: normal;
	font-size: 24px;
	&:active {
		border-color: rgba(21, 25, 28, 0.24);
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
	const emailValue = useSelector((state) => state.email.value)
	const isEmailValid = useSelector((state) => state.email.valid)
	const passwordValue = useSelector((state) => state.password.value)
	const isPasswordValid = useSelector((state) => state.password.valid)
	const isPasswordRepeated = useSelector((state) => state.password.repeated)
	const dispatch = useDispatch()
	return (
		<CustomInputField>
			<CustomTitle>{title}</CustomTitle>
			<CustomInput
				onChange={(e) => {
					switch (target) {
						case "email":
							dispatch(emailChange(e.target.value))
							{
								emailValue && dispatch(emailValid(emailValue.match(/^\S+@\S+\.\S+$/) == null ? false : true))
							}
							break
						case "password":
							dispatch(passwordChange(e.target.value))
							{
								passwordValue && dispatch(passwordValid(passwordValue.match(/(?=.{8,})/) == null ? false : true))
							}
							break
						case "passwordCheck":
							dispatch(passwordRepeated(e.target.value === passwordValue))
							break
					}
				}}
			/>
			{target == "email" && !isEmailValid && <CustomTitle color={"red"}>Введите корректный адрес</CustomTitle>}
			{target == "password" && !isPasswordValid && <CustomTitle color={"red"}>Пароль должен быть длиной минимум 9 символов</CustomTitle>}
			{target == "passwordCheck" && !isPasswordRepeated && <CustomTitle color={"red"}>Пароль не совпадает с введённым</CustomTitle>}
		</CustomInputField>
	)
}
