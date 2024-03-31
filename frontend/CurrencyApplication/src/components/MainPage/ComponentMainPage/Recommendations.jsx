import styled from "styled-components"
import RecommendationsInput from "../style/RecommendationsInput"
import Slide from "../style/Slide"
import { RecomendationSliderProvider } from "../style/newsSlider/RecomendationSliderProvider"

const RecommendationsDiv = styled.div`
	width: 100%;
	padding-top: 35px;
	background: #f1f7ff;
	padding-bottom: 64px;
`

const SlideDiv = styled.div`
	display: flex;
	min-width: 368px;
	max-width: 368px;
	width: 100%;
	height: 512px;
	flex-direction: column;
	justify-content: center;
	gap: 32px;
`
const Recommendations = () => {
	return (
		<RecommendationsDiv>
			<RecommendationsInput title={"Рекомендации по продаже/покупке валют"} />
			<RecomendationSliderProvider width={1280} height={512}>
				<SlideDiv>
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
				</SlideDiv>
				<SlideDiv>
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
				</SlideDiv>
				<SlideDiv>
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
				</SlideDiv>
				<SlideDiv>
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
				</SlideDiv>
				<SlideDiv>
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
				</SlideDiv>
				<SlideDiv>
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
					<Slide href={"#"} titleOne={"Заголовок"} titleTwo={"аннотация еще какой-то текст желательно в 2 строчки"} />
				</SlideDiv>
			</RecomendationSliderProvider>
		</RecommendationsDiv>
	)
}

export default Recommendations
