import styled from "styled-components"
import Navbar from "../Navbar/Navbar.jsx"
import LeftExchangeRate from "./ComponentMainPage/LeftExchangeRate.jsx"
import Scrin from "./img/scrin.svg"
import Recommendations from "./ComponentMainPage/Recommendations.jsx"
import Footer from "../Footer/Footer.jsx"

const MainPageDiv = styled.div`
	max-width: 1280px;
	margin: 0 auto;
`
const RateAndСhart = styled.div`
	display: flex;
	justify-content: space-between;
`
const RightChart = styled.div`
	margin-top: 105px;
`

const MainPage = () => {
	return (
		<>
			<Navbar />
			<MainPageDiv>
				<RateAndСhart>
					<LeftExchangeRate />
					<RightChart>
						<img src={Scrin} />
					</RightChart>
				</RateAndСhart>
				<Recommendations />
			</MainPageDiv>
			<Footer />
		</>
	)
}

export default MainPage
