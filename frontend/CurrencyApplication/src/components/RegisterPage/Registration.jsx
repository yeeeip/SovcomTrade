import styled from "styled-components"
import registrationBG from "./images/registrationBG.jpg"
import { Button } from "./styles/Button"
import { ExitButton } from "./styles/ExitButton"
import { SmallButton } from "./styles/SmallButton"
import { SmallGreyText } from "./styles/SmallGreyText"
import { SliderProvider } from "./styles/Slider/SliderProvider"
import { useSelector } from "react-redux"
import { useLayoutEffect, useState } from "react"

const CustomFormContainer = styled.div`
	width: 60%;
	margin: 120px auto;
	padding: 0 150px;
	& > *:not(:last-child) {
		margin-bottom: 25px;
	}
	& > *:first-child {
		margin-bottom: 42px;
	}
`
const CustomTitle = styled.p`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 32px;
	@media (max-width: 1100px) {
		font-size: 26px;
	}
`
const CustomButtonBlock = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`

const CustomBGImage = styled.div`
	width: 40%;
	background-image: url(${registrationBG});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`
const CustomContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	& > *:last-child {
		margin: 115px 100px 0 0;
	}
`

function useWindowSize() {
	const [size, setSize] = useState([0, 0])
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight])
		}
		window.addEventListener("resize", updateSize)
		updateSize()
		return () => window.removeEventListener("resize", updateSize)
	}, [])
	return size
}

function Registration() {
	const [windowWidth, windowHeight] = useWindowSize()
	const generalError = useSelector((state) => state.register.generalError)
	const data = [
		[
			{ target: "email", title: "Адрес электронной почты *" },
			{ target: "password", title: "Пароль *" },
			{ target: "secondPassword", title: "Повторите пароль *" },
		],
		[
			{ target: "phone", title: "Номер телефона *" },
			{ target: "firstName", title: "Имя *" },
			{ target: "secondName", title: "Фамилия *" },
			{ target: "middleName", title: "Отчество" },
		],
	]
	return (
		<CustomContainer>
			<CustomBGImage />
			<CustomFormContainer>
				<div style={{ display: "flex", gap: "20px" }}>
					<CustomTitle>Регистрация</CustomTitle>
					{generalError.valid && <CustomTitle style={{ color: "red" }}>{generalError.value}</CustomTitle>}
				</div>

				<SliderProvider data={data} height={550} width={windowWidth * 0.6 - 300} />

				<Button content={"Зарегистрироваться"} target={"register"} />
				<CustomButtonBlock>
					<SmallGreyText>Уже есть аккаунт? </SmallGreyText>
					<SmallButton href={"/entry"} content={"Войти"} />
				</CustomButtonBlock>
			</CustomFormContainer>
			<ExitButton />
		</CustomContainer>
	)
}

export default Registration
