import styled from "styled-components"
import CurrencyCell from "../style/CurrencyCell"
import BuyingSelling from "../style/BuyingSelling"
import ButtonOpen from "../style/ButtonOpen"
import { useSelector } from "react-redux"
import { SliderProvider } from "../style/Slider/SliderProvider"

const LeftExchangeRateDiv = styled.div`
	margin-top: 50px;
	width: 30%;
	display: flex;
	flex-direction: column;
`
const Greeting = styled.h1`
	font-family: "TT Travels";
	color: #213a8b;
	font-weight: 500;
	font-size: 34px;
	margin-bottom: 30px;
	@media (max-width: 1400px) {
		font-size: 30px;
	}
`
const LeftExchangeRate = () => {
	let bankAccounts = useSelector((state) => state.login.bankAccounts) || []
	return (
		<LeftExchangeRateDiv>
			<Greeting>Добрый день</Greeting>

			<ButtonOpen title={"Открыть счет  +"} />
			<SliderProvider height={302}>
				{bankAccounts.map((item) => {
					return <CurrencyCell key={item.id} currency={item.currency} balance={item.bigDecimal} />
				})}
			</SliderProvider>

			<BuyingSelling title={"Покупка / продажа"} />
		</LeftExchangeRateDiv>
	)
}

export default LeftExchangeRate
