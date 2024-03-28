import styled from "styled-components"
import Navbar from "../Navbar/Navbar.jsx"
import LeftExchangeRate from "./ComponentMainPage/LeftExchangeRate.jsx"
import Scrin from './img/scrin.svg'
import Recommendations from "./ComponentMainPage/Recommendations.jsx"
import Footer from "../Footer/Footer.jsx"

const Line = styled.div`
    width: 100%;
    height: 2px;
    background: rgba(21, 25, 28, 0.25);
`
const MainPageDiv = styled.div`
    
`
const RateAndСhart = styled.div`
    background: #F1F7FF;
    display: flex;
    justify-content: space-around;
`
const RightChart = styled.div`
    margin-top: 105px;
`


const MainPage = () => {
    return(
        <MainPageDiv>
            <Navbar/>
            <Line/>
            <RateAndСhart>
                <LeftExchangeRate/>  
                <RightChart >
                        <img src={Scrin}/>
                </RightChart>
            </RateAndСhart>
            <Recommendations/>
            <Footer/>
        </MainPageDiv>
    )
} 

export default MainPage