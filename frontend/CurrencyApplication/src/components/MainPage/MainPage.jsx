import styled from "styled-components"
import Navbar from "../Navbar/Navbar.jsx"
import LeftExchangeRate from "./ComponentMainPage/LeftExchangeRate.jsx"
import Recommendations from "./ComponentMainPage/Recommendations.jsx"
import Footer from "../Footer/Footer.jsx"
import { Chart } from "./ComponentMainPage/Chart.jsx"

const MainPageDiv = styled.div`
	max-width: 1280px;
	margin: 0 auto;
`
const RateAndСhart = styled.div`
	display: flex;
	justify-content: space-between;
`
const RightChart = styled.div`
	margin-top: 115px;
	width: 800px;
	height: 400px;
`
const ChartTitleSpan = styled.span`
	display: flex;
	justify-content: flex-end;
	margin-top: 15px;
	margin-right: 10px;
	font-family: TT Travels;
	font-size: 16px;
	font-weight: 400;
	line-height: 13.76px;
	text-align: left;
`

const MainPage = () => {
	return (
		<>
			<Navbar />
			<MainPageDiv>
				<RateAndСhart>
					<LeftExchangeRate />
					<RightChart>
						<Chart/>
						<ChartTitleSpan>Последнее обновление курса: дд.мм.гг.</ChartTitleSpan>
					</RightChart>
				</RateAndСhart>
				<Recommendations />
			</MainPageDiv>
			<Footer />
		</>
	)
}

export default MainPage
