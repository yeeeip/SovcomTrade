import styled from "styled-components"
import Pig from "../img/pig.svg"

const CurrencyCellDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 90px;
	border: 2px solid #213a8b;
	border-radius: 20px;
	background-color: white;
`
const TextCurrencyDiv = styled.div`
	display: flex;
	flex-direction: column;
`
const СurrencyPrice = styled.span`
	color: #213a8b;
	font-family: "TT Travels";
	font-size: 21px;
	padding-bottom: 7px;
`
const СurrencyСountry = styled.span`
	color: #1d1f24;
	font-family: "TT Travels";
	font-size: 14px;
`

const CurrencyCell = ({ currency, balance }) => {
	let country = ""
	let currencySymbol = ""
	switch (currency) {
		case "RUB":
			country = "Валюта России"
			currencySymbol = "₽"
			break
		case "AED":
			country = "Валюта ОАЭ"
			currencySymbol = "DH"
			break
		case "CNY":
			country = "Валюта Китая"
			currencySymbol = "¥"
			break
	}
	return (
		<CurrencyCellDiv>
			<img style={{ padding: "0 10px" }} src={Pig} />
			<TextCurrencyDiv>
				<СurrencyPrice>
					{balance} {currencySymbol}
				</СurrencyPrice>
				<СurrencyСountry>{country}</СurrencyСountry>
			</TextCurrencyDiv>
		</CurrencyCellDiv>
	)
}

export default CurrencyCell
