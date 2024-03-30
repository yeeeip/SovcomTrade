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
import { useNavigate } from "react-router-dom"
import { setFirstName, setLastName, setMiddleName, setBankAccounts } from "../../../redux/loginSlice"
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
	cursor: pointer;
	user-select: none;

	@media (max-width: 1200px) {
		font-size: 20px;
		padding: 15px;
	}
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
	cursor: pointer;
	user-select: none;
	@media (max-width: 1200px) {
		font-size: 20px;
		padding: 15px;
	}
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
	const SERVER_URL = "https://0aec-95-26-80-219.ngrok-free.app"
	let navigate = useNavigate()
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
			case "register":
				axios({
					method: "post",
					mode: "no-cors",
					url: `${SERVER_URL}/api/v1/auth/register`,
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
						navigate("/login", { replace: true })
					})
					.catch((err) => {
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
			case "login":
				axios({
					method: "post",
					mode: "no-cors",
					url: `${SERVER_URL}/api/v1/auth/login`,
					headers: {
						"Content-Type": "application/json",
					},
					data: JSON.stringify({
						email: email || "",
						password: password || "",
					}),
				})
					.then((response) => {
						console.log(response)
						dispatch(setFirstName(response.data.user.first_name))
						dispatch(setLastName(response.data.user.last_name))
						dispatch(setMiddleName(response.data.user.middle_name || ""))
						dispatch(setBankAccounts(response.data.user.user_accounts))
						sessionStorage.setItem("token", response.data.jwtToken)
						sessionStorage.setItem("loginTime", new Date())
						navigate("/mainPage", { replace: true })
					})
					.catch((err) => {
						if (!err.response?.data) {
							dispatch(generalErrorChange("Что-то пошло не так. Попробуйте ещё раз"))
							dispatch(generalErrorValid(true))
							setTimeout(() => {
								dispatch(generalErrorChange(null))
								dispatch(generalErrorValid(false))
							}, 5000)
							return
						}
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
