import styled from "styled-components"
import RecommendationsInput from "../style/RecommendationsInput"
import Slide from "../style/Slide"
import { RecomendationSliderProvider } from "../style/newsSlider/RecomendationSliderProvider"
import { useEffect } from "react"

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
const Recommendations = ({ data }) => {
	return (
		<RecommendationsDiv>
			<RecommendationsInput title={"Рекомендации по продаже/покупке валют"} />
			<RecomendationSliderProvider width={1280} height={512}>
				{data.map((item, index) => {
					return (
						<SlideDiv>
							<Slide href={item[0].news.newsUrl} titleOne={item[0].news.title} titleTwo={item[0].news.shortDesc} dopInfo={item[0].forecast} />
							<Slide href={item[1].news.newsUrl} titleOne={item[1].news.title} titleTwo={item[1].news.shortDesc} dopInfo={item[1].forecast} />
						</SlideDiv>
					)
				})}
			</RecomendationSliderProvider>
		</RecommendationsDiv>
	)
}

export default Recommendations
