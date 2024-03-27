import { Button } from "./styles/Button"
import { Input } from "./styles/Input"
import styled from "styled-components"
import registrationBG from "../images/registrationBG.jpg"
import { BackButton } from "./styles/BackButton"
import { ExitButton } from "./styles/ExitButton"
import { SmallButton } from "./styles/SmallButton"

const CustomFormContainer = styled.div`
	padding: 120px 400px 120px 24px;
	width: 60%;
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
`
const CustomButtonBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	margin: 0 auto;
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
	& > *:nth-child(2) {
		margin: 115px 0 0 100px;
	}
	& > *:last-child {
		margin: 115px 100px 0 0;
	}
`

function Registration() {
	return (
		<CustomContainer>
			<CustomBGImage />
			<BackButton />
			<CustomFormContainer>
				<CustomTitle>Регистрация</CustomTitle>
				<Input target={"email"} title={"Адрес электронной почты"} />
				<Input target={"password"} title={"Пароль"} />
				<Input target={"passwordCheck"} title={"Повторите пароль"} />
				<Button href={"#"} content={"Зарегистрироваться"} target={"register"} />
				<CustomButtonBlock>
					<SmallButton href={"#"} content={"Уже есть аккаунт? Войти"} />
				</CustomButtonBlock>
			</CustomFormContainer>
			<ExitButton />
		</CustomContainer>
	)
}

export default Registration
