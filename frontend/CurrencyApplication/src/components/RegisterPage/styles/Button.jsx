import React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

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
				} catch (err) {
					console.error(err)
				}
				break
			case "registration":
				try {
					console.log(email, password, firstName, secondName, middleName, phone, secondPassword)
					fetch("http://localhost:8080/api/v1/auth/register", {
						mode: "no-cors",
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							"email": email,
							"password": password,
							"firstName": firstName,
							"lastName": secondName,
							"middleName": middleName,
							"phoneNumber": phone,
							"confirmPassword": secondPassword,
						}),
					}).then((response) => {
						console.log(response)
						if (response != 200) console.error("Ошибка апи")
					})
				} catch (err) {
					console.error(err)
				}
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
