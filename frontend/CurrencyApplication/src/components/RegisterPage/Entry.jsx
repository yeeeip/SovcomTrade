import { Button } from "./styles/Button"
import { Input } from "./styles/Input"
import styled from "styled-components"
import registrationBG from "./images/registrationBG.jpg"
import { BackButton } from "./styles/BackButton"
import { ExitButton } from "./styles/ExitButton"
import { SmallButton } from "./styles/SmallButton"
import { useDispatch, useSelector } from "react-redux"
const CustomFormContainer = styled.div`
	padding: 120px 100px 120px 24px;
	width: 60%;
	& > *:not(:last-child) {
		margin-bottom: 25px;
	}
	& > *:first-child {
		margin-bottom: 42px;
	}
	@media (max-width: 1100px) {
		margin-bottom: 20px;
	}
	@media (max-width: 768px) {
		padding: 50px 0px 0px 0px;
		width: 85%;
		& > *:first-child {
			margin-bottom: 25px;
		}
		& > *:not(:last-child) {
			margin-bottom: 15px;
		}
	}
`
const CustomTitleDiv = styled.div`
	display: "flex";
	gap: "20px";
	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
const CustomTitle = styled.p`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 32px;
	color: #213a8b;
	@media (max-width: 1100px) {
		font-size: 30px;
	}
	@media (max-width: 900px) {
		font-size: 26px;
	}
`
const CustomButtonBlock = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding-top: 20px;
	margin: 0 auto;
	@media (max-width: 410px) {
		flex-direction: column;
		padding-top: 0px;
	}
`

const CustomBGImage = styled.div`
	width: 40%;
	background-image: url(${registrationBG});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	@media (max-width: 768px) {
		display: none;
	}
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
	@media (max-width: 768px) {
		& > *:nth-child(2) {
			margin: 46px 0 0 18px;
		}
	}
	@media (max-width: 768px) {
		& > *:last-child {
			margin: 40px 0px 0 0;
		}
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

function Entry() {
	const generalError = useSelector((state) => state.register.generalError)
	const loginMessage = useSelector((state) => state.login.message)
	const register = useSelector((state) => state.register)
	return (
		<CustomContainer>
			<CustomBGImage />
			<BackButton href={"/"} />
			<CustomFormContainer>
				<CustomTitleDiv>
					<CustomTitle>Вход</CustomTitle>
					{generalError.valid && <CustomTitle style={{ color: "#DA5155" }}>{generalError.value}</CustomTitle>}
					{loginMessage && <CustomTitle style={{ color: "#61D6C0" }}>{loginMessage}</CustomTitle>}
				</CustomTitleDiv>
				<Input
					target={"email"}
					title={"Адрес электронной почты"}
					caution={typeof register.email.valid == "string"}
					errorMessage={typeof register.email.valid == "string" ? register.email.valid : false}
				/>
				<Input
					target={"password"}
					title={"Пароль"}
					caution={typeof register.password.valid == "string"}
					errorMessage={typeof register.password.valid == "string" ? register.password.valid : false}
				/>
				<Button href={"#"} content={"Войти"} target={"login"} />
				<CustomButtonBlock>
					<SmallButton href={"/recovery"} content={"Забыли пароль?"} />
					<SmallButton href={"/registration"} content={"Зарегистрироваться"} />
				</CustomButtonBlock>
			</CustomFormContainer>
			<ExitButton />
		</CustomContainer>
	)
}

export default Entry
