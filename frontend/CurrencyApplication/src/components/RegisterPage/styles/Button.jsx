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
import { setFirstName, setLastName, setMiddleName, setBankAccounts, setMessage } from "../../../redux/loginSlice"
import axiosRetry from "axios-retry"
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay })
const CustomButton = styled.button`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 24px;
	color: white;
	padding: 30px;
	width: 100%;
	text-align: center;
	background: #213a8b;
	border-radius: 20px;
	cursor: pointer;
	user-select: none;

	@media (max-width: 1200px) {
		font-size: 20px;
		padding: 15px;
	}
	@media (max-width: 1100px) {
		font-size: 16px;
		padding: 13px;
	}
	@media (max-width: 950px) {
		font-size: 14px;
		padding: 10px;
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
	background: #213a8b;
	text-decoration: none;
	border-radius: 20px;
	cursor: pointer;
	user-select: none;
	@media (max-width: 1200px) {
		font-size: 20px;
		padding: 15px;
	}
	@media (max-width: 900px) {
		font-size: 17px;
		padding: 13px;
	}
	@media (max-width: 285px) {
		font-size: 13px;
		padding: 10px;
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
	const SERVER_URL = process.env.REACT_APP_BACKEND_URL
	let navigate = useNavigate()
	const handleButtonClick = () => {
		switch (target) {
			case "password recovery":
				try {
					fetch("/recovery", {
						method: "post",
						body: email,
					}).then()
				} catch (err) {}
				break
			case "registration":
				console.log({
					email: email || "",
					password: password || "",
					firstName: firstName || "",
					lastName: secondName || "",
					middleName: middleName || "",
					phoneNumber: phone || "",
					confirmPassword: secondPassword || "",
				})
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
						navigate("/", { replace: true })
						dispatch(setMessage(`Подтвердите почту. Письмо отправлено на ${email}`))
						setTimeout(() => {
							dispatch(setMessage(null))
						}, 15000)
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
						dispatch(setFirstName(response.data.user.first_name))
						dispatch(setLastName(response.data.user.last_name))
						dispatch(setMiddleName(response.data.user.middle_name || ""))
						sessionStorage.setItem("firstName", response.data.user.first_name)
						sessionStorage.setItem("lastName", response.data.user.last_name)
						sessionStorage.setItem("token", response.data.jwtToken)
						navigate("/mainPage", { replace: true })
					})
					.catch((err) => {
						console.log(err)
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
