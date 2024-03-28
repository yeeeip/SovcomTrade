import styled from "styled-components"
import CurrencyCell from "../style/CurrencyCell"
import BuyingSelling from "../style/BuyingSelling"
import ButtonOpen from "../style/ButtonOpen"

const LeftExchangeRateDiv = styled.div`
    margin-top: 50px;
    width: 20%;
    display: flex;
    flex-direction: column;
`
const Greeting = styled.h1`
    font-family: "TT Travels"; 
    color: #213A8B;
    font-size: 34px;
    margin-bottom: 30px;
`
const LeftExchangeRate = () => {
    return(
        <LeftExchangeRateDiv>
            <Greeting>Добрый день</Greeting>
            <CurrencyCell titleOne={"0¥"} titleoTwo={"Валюта Китая"}/>
            <CurrencyCell titleOne={"0 DH"} titleoTwo={"Валюта ОАЭ"}/>
            <CurrencyCell titleOne={"0 ₽"} titleoTwo={"Валюта России"}/>
            <BuyingSelling href={"#"} title={"Покупка / продажа"}/>
            <ButtonOpen href={"#"} title={"Открыть счет  +"}/>
        </LeftExchangeRateDiv>
    )
} 

export default LeftExchangeRate