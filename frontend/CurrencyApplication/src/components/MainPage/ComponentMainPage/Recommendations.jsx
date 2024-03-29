import styled from "styled-components"
import RecommendationsInput from "../style/RecommendationsInput"
import Slide from "../style/Slide"
import Add from "../img/add.svg"

const RecommendationsDiv = styled.div`
    width: 100%;
    padding-top: 35px;
    background: #F1F7FF;
`
const SlideDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 388px);
    justify-content: space-around;
`
const ImgAdd = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
`
const Recommendations = () => {
    return(
        <RecommendationsDiv>
            <RecommendationsInput title={"Рекомендации по продаже/покупке валют"}/>
            <SlideDiv>
                <Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"}/>
                <Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"}/>
                <Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"}/>
                <Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"}/>
                <Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"}/>
                <Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"}/>
            </SlideDiv>
            <ImgAdd>
                <a href="#"><img src={Add}/></a>
            </ImgAdd>
        </RecommendationsDiv>
    )
}

export default Recommendations