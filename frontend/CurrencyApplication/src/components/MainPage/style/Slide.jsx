import styled from "styled-components"
import Money from '../img/money.svg'
import Next from '../img/slider.svg'
 
const SlideDiv = styled.div`
    max-width: 100%;
    padding: 0 31px 10px 0;
	background-image: url(${Money});
    display: flex;
    margin: 30px 10px;
`
const SlideInfo = styled.div`
    padding-top: 170px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
`
const SlideH1 = styled.h1`
    padding-bottom: 10px;
    font-family: "TT Travels"; 
    color: white;
    font-size: 21px;
`
const SlideSpan = styled.span`
    width: 300px;
    font-family: "TT Travels"; 
    color: white;
    font-size: 14px;
`
const SlideA = styled.a`
    padding-top: 165px;
`


const Slide = ({titleOne, titleTwo, href}) => {
    return(
        <SlideDiv>
            <SlideInfo>
                <SlideH1>{titleOne}</SlideH1>
                <SlideSpan>{titleTwo}</SlideSpan>
            </SlideInfo>
            <SlideA href={href}><img src={Next}/></SlideA>
        </SlideDiv>        
    )
} 

export default Slide