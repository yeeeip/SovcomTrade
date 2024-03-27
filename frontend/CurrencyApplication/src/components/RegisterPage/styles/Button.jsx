import React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import {
	emailValid,
	passwordValid,
	secondPasswordValid,
	phoneValid,
	firstNameValid,
	secondNameValid,
	generalErrorValid,
	generalErrorChange,
} from "../../../redux/registerSlice"

import axios from "axios"
const CustomButton = styled.button`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 24px;
	color: white;
	padding: 30px;
	width: 100%;
	text-align: center;
	background: #000;
	border-radius: 20px;
`
const CustomLinkButton = styled.a`
	display: block;
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 24px;
	color: white;
	padding: 30px;
	width: 100%;
	text-align: center;
	background: #000;
	text-decoration: none;
	border-radius: 20px;
`

export const Button = ({ href, content, target }) => {
	const email = useSelector((state) => state.register.email?.value)
	const password = useSelector((state) => state.register.password?.value)
	const secondPassword = useSelector((state) => state.register.secondPassword?.value)
	const phone = useSelector((state) => state.register.phone?.value)
	const firstName = useSelector((state) => state.register.firstName?.value)
	const secondName = useSelector((state) => state.register.secondName?.value)
	const middleName = useSelector((state) => state.register.middleName?.value)
	const dispatch = useDispatch()
	const handleButtonClick = () => {
		//if (!(isEmailValid && isPasswordRepeated && isPasswordValid)) return
		switch (target) {
			case "password recovery":
				try {
					fetch("/recovery", {
						method: "post",
						body: email,
					})
						.then
						//Ну тут короче да к апи запрос
						()
				} catch (err) {}
				break
			case "registration":
				console.log(
					JSON.stringify({
						email: email || "",
						password: password || "",
						firstName: firstName || "",
						lastName: secondName || "",
						middleName: middleName || "",
						phoneNumber: phone || "",
						confirmPassword: secondPassword || "",
					})
				)
				axios({
					method: "post",
					mode: "no-cors",
					url: "https://91ed-95-26-80-238.ngrok-free.app/api/v1/auth/register",
					headers: {
						"Content-Type": "application/json",
					},
					data: JSON.stringify({
						email: email || "",
						password: password || "",
						firstName: firstName || "",
						lastName: secondName || "",
						middleName: middleName || "",
						phoneNumber: phone || "",
						confirmPassword: secondPassword || "",
					}),
				})
					.then((response) => {
						console.log(response)
					})
					.catch((err) => {
						console.log(err)
						let response = err.response.data
						if (response.status != 400) {
							dispatch(generalErrorChange("Что-то пошло не так. Попробуйте ещё раз"))
							dispatch(generalErrorValid(true))
							setTimeout(() => {
								dispatch(generalErrorChange(null))
								dispatch(generalErrorValid(false))
							}, 5000)
						}
						if (!response.errors) {
							dispatch(generalErrorChange(response.detail))
							dispatch(generalErrorValid(true))
							return
						}
						response.errors.map((error) => {
							switch (error.field) {
								case "email":
									dispatch(emailValid(error.defaultMessage))
									setTimeout(() => {
										dispatch(emailValid(true))
									}, 15000)
									break
								case "password":
									dispatch(passwordValid(error.defaultMessage))
									setTimeout(() => {
										dispatch(passwordValid(true))
									}, 15000)
									break
								case "confirmPassword":
									dispatch(secondPasswordValid(error.defaultMessage))
									setTimeout(() => {
										dispatch(secondPasswordValid(true))
									}, 15000)
									break
								case "phoneNumber":
									dispatch(phoneValid(error.defaultMessage))
									setTimeout(() => {
										dispatch(phoneValid(true))
									}, 15000)
									break
								case "firstName":
									dispatch(firstNameValid(error.defaultMessage))
									setTimeout(() => {
										dispatch(firstNameValid(true))
									}, 15000)
									break
								case "lastName":
									dispatch(secondNameValid(error.defaultMessage))
									setTimeout(() => {
										dispatch(secondNameValid(true))
									}, 15000)
									break
							}
						})
					})

				break
		}
	}
	return (
		<>
			{(href && (
				<CustomLinkButton href={href} onClick={handleButtonClick}>
					{content}
				</CustomLinkButton>
			)) || <CustomButton onClick={handleButtonClick}>{content}</CustomButton>}
		</>
	)
}