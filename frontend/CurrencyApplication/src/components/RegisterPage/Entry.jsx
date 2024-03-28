import { Button } from "./styles/Button"
import { Input } from "./styles/Input"
import styled from "styled-components"
import registrationBG from "./images/registrationBG.jpg"
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
    justify-content: end;
    align-items: center;
    width: 100%;
    padding-top: 20px;
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
const CustomLinkButton = styled.a`
	display: block;

	font-family: "TT Travels";
	font-weight: 500;
	font-size: 16px;
	color: rgba(21, 25, 28, 0.5);

	width: 100%;
	text-align: center;
	text-decoration: underline;

	background: none;
	border: none;

	cursor: pointer;
`

function Entry () {
	return (
		<CustomContainer>
			<CustomBGImage />
			<BackButton />
			<CustomFormContainer>
				<CustomTitle>Вход</CustomTitle>
				<Input target={"email"} title={"Адрес электронной почты"} />
				<Input target={"password"} title={"Пароль"} />
				<Button href={"#"} content={"Войти"} target={"register"} />
				<CustomButtonBlock>
					<SmallButton href={"#"} content={"Забыли пароль?"} />
                    <SmallButton href={"#"} content={"Зарегистрироваться"} />
				</CustomButtonBlock>
			</CustomFormContainer>
			<ExitButton />
		</CustomContainer>
	)
}

export default Entry