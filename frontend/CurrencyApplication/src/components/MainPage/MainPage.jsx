import styled from "styled-components"
import Navbar from "../Navbar/Navbar.jsx"
import LeftExchangeRate from "./ComponentMainPage/LeftExchangeRate.jsx"
import Scrin from "./img/scrin.svg"
import Recommendations from "./ComponentMainPage/Recommendations.jsx"
import Footer from "../Footer/Footer.jsx"

const MainPageDiv = styled.div``
const RateAndСhart = styled.div`
	background: #f1f7ff;
	display: flex;
	justify-content: space-around;
`
const RightChart = styled.div`
	margin-top: 105px;
`

const MainPage = () => {
	return (
		<MainPageDiv>
			<Navbar />
			<RateAndСhart>
				<LeftExchangeRate />
				<RightChart>
					<img src={Scrin} />
				</RightChart>
			</RateAndСhart>
			<Recommendations />
			<Footer />
		</MainPageDiv>
	)
}

export default MainPage
