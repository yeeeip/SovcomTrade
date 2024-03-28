import styled from "styled-components"
import registrationBG from "./images/registrationBG.jpg"
import { Button } from "./styles/Button"
import { ExitButton } from "./styles/ExitButton"
import { SmallButton } from "./styles/SmallButton"
import { SmallGreyText } from "./styles/SmallGreyText"
import { SliderProvider } from "./styles/Slider/SliderProvider"
import { useSelector } from "react-redux"

const CustomFormContainer = styled.div`
	padding: 120px 400px 120px 124px;
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
	gap: 15px;
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

function Registration() {
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
				<SliderProvider data={data} height={550} width={600} />

				<Button href={"#"} content={"Зарегистрироваться"} target={"registration"} />
				<CustomButtonBlock>
					<SmallGreyText>Уже есть аккаунт? </SmallGreyText>
					<SmallButton href={"#"} content={"Войти"} />
				</CustomButtonBlock>
			</CustomFormContainer>
			<ExitButton />
		</CustomContainer>
	)
}

export default Registration
