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
const LeftExchangeRate = ({ handlecurrencymodal, handleoffermodal }) => {
	let bankAccounts = useSelector((state) => state.login.bankAccounts) || [];
	const GreetingDay = () => {
		const myDate = new Date();
		const hrs = myDate.getHours();
		const mins = myDate.getMinutes();
		if (hrs >= 5 && ((hrs == 5 && mins >= 30) || (hrs > 5 && hrs < 12))) {
			return 'Доброе утро';
		}else if (hrs >= 12 && hrs < 18) {
			return 'Добрый день';
		}else if (hrs >= 18 && hrs < 24) {
			return 'Добрый вечер';
		}else if (hrs >= 0 && hrs < 5) {
			return 'Доброй ночи';
		}else {
			return 'Error';
		}
	} 

	return (
		<LeftExchangeRateDiv>
			<Greeting>{GreetingDay()}</Greeting>

			<ButtonOpen title={"Открыть счет  +"} handlefunc={handlecurrencymodal} />
			<SliderProvider height={302}>
				{bankAccounts.map((item) => {
					return <CurrencyCell key={item.id} currency={item.currency} balance={item.bigDecimal} />
				})}
			</SliderProvider>

			<BuyingSelling title={"Покупка / продажа"} handlefunc={handleoffermodal} />
		</LeftExchangeRateDiv>
	)
}

export default LeftExchangeRate
