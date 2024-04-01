import styled from "styled-components"
import RecommendationsInput from "../style/RecommendationsInput"
import Slide from "../style/Slide"
import { RecomendationSliderProvider } from "../style/newsSlider/RecomendationSliderProvider"
import { useEffect, useState } from "react"
import { Loading } from "../../Loading"

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
	justify-content: start;

	gap: 32px;
`
const CustomTitle = styled.div`
	font-family: "TT Travels";
	font-size: 24px;
	color: #213a8b;
	width: fit-content;
	margin: 0 auto;
`
const Recommendations = ({ data = [] }) => {
	let [filteredData, setFilteredData] = useState(data)
	let [inputValue, setInputValue] = useState("")
	let [filterValue, setFilterValue] = useState("CNY")
	const handleInputValueChange = (e) => {
		setInputValue(e.target.value)
	}
	const handleFilterValueChange = (data) => {
		let temp = ""
		switch (data) {
			case "Юани":
				temp = "CNY"
				break
			case "Дирхам":
				temp = "AED"
				break
		}
		console.log(temp)
		setFilterValue(temp)
	}

	useEffect(() => {
		let tempFiltered = []
		for (let item of data) {
			if (item.news.title.includes(inputValue) && item.news.currency == filterValue) {
				tempFiltered.push(item)
			}
		}
		let temp = []
		for (let i = 0; i < tempFiltered.length; i += 2) {
			if (tempFiltered[i + 1]) {
				temp.push([tempFiltered[i], tempFiltered[i + 1]])
			} else {
				temp.push([tempFiltered[i]])
			}
		}
		setFilteredData(temp)
	}, [inputValue, filterValue, data])

	return (
		<RecommendationsDiv>
			<RecommendationsInput title={"Рекомендации по продаже/покупке валют"} handlefunc={handleInputValueChange} handlefilter={handleFilterValueChange} />
			{!filteredData.length && <Loading />}
			{filteredData.length == 1 && <CustomTitle>Новостей по заданным фильтрам нет</CustomTitle>}
			{filteredData.length > 1 && (
				<RecomendationSliderProvider width={1280} height={512}>
					{filteredData.map((item, index) => {
						return (
							<SlideDiv>
								<Slide
									href={`${item[0].news.newsUrl}`}
									titleOne={item[0].news.title}
									titleTwo={item[0].news.shortDesc}
									dopInfo={item[0].forecast}
								/>
								{item[1] && (
									<Slide
										href={`${item[1].news.newsUrl}`}
										titleOne={item[1].news.title}
										titleTwo={item[1].news.shortDesc}
										dopInfo={item[1].forecast}
									/>
								)}
							</SlideDiv>
						)
					})}
				</RecomendationSliderProvider>
			)}
		</RecommendationsDiv>
	)
}

export default Recommendations
