import styled from "styled-components"
import Pig from '../img/pig.svg'

const CurrencyCellDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 90px;
    border: 2px solid #213A8B;
    border-radius: 20px;
    margin-bottom: 20px;
    background-color: white;
`
const TextCurrencyDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const СurrencyPrice = styled.span`
    color: #213A8B;
    font-family: "TT Travels"; 
    font-size: 21px;
    padding-bottom: 7px;
`
const СurrencyСountry = styled.span`
    color: #1D1F24;
    font-family: "TT Travels"; 
    font-size: 14px;
`



const CurrencyCell = ({titleOne, titleoTwo}) => {
    return(
        <CurrencyCellDiv>
            <img style={{padding:"0 10px"}} src={Pig}/>
            <TextCurrencyDiv>
                <СurrencyPrice>{titleOne}</СurrencyPrice>
                <СurrencyСountry>{titleoTwo}</СurrencyСountry>
            </TextCurrencyDiv>
        </CurrencyCellDiv>
    )
} 

export default CurrencyCell