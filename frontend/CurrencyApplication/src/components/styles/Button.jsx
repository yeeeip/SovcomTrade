import React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { emailValid } from "../../redux/emailSlice"
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
	const email = useSelector((state) => state.email.value)
	const password = useSelector((state) => state.password.value)
	const isEmailValid = useSelector((state) => state.email.valid)
	const isPasswordValid = useSelector((state) => state.password.valid)
	const isPasswordRepeated = useSelector((state) => state.password.repeated)
	const handleButtonClick = () => {
		if (!(isEmailValid && isPasswordRepeated && isPasswordValid)) return
		switch (target) {
			case "password recovery":
				fetch("/recovery", {
					method: "post",
					body: email,
				})
					.then
					//Ну тут короче да к апи запрос
					()

				break
			case "registration":
				fetch("/api/v1/auth/register", {
					method: "post",
					body: JSON.stringify({
						email: email,
						password: password,
						firstName: "string",
						lastName: "string",
						middleName: "string",
						phoneNumber: "string",
						confirmPassword: password,
					}),
				}).then((response) => {
					if (response != 200) console.error("Ошибка апи")
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
