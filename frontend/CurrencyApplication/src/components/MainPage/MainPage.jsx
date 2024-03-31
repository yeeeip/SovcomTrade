import styled from "styled-components"
import Navbar from "../Navbar/Navbar.jsx"
import LeftExchangeRate from "./ComponentMainPage/LeftExchangeRate.jsx"
import Scrin from "./img/scrin.svg"
import Recommendations from "./ComponentMainPage/Recommendations.jsx"
import Footer from "../Footer/Footer.jsx"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBankAccounts } from "../../redux/loginSlice.js"
import axios from "axios"
import { OfferModal } from "../Modals/Offer/OfferModal.jsx"
import { useNavigate } from "react-router-dom"
import { CurrencyModal } from "../Modals/Currency/CurrencyModal.jsx"
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
	margin-top: 105px;
	width: 60%;
`

const MainPage = () => {
	const [isOfferModalActive, setIsOfferModalActive] = useState(false)
	const [news, setNews] = useState([])
	const [varForUpdate, setvarForUpdate] = useState(0)
	const [isCurrencyModalActive, setIsCurrencyModalActive] = useState(false)
	let navigate = useNavigate()
	const handleOfferButtonClick = () => {
		setIsOfferModalActive(!isOfferModalActive)
	}
	const handleCurrencyButtonClick = () => {
		setIsCurrencyModalActive(!isCurrencyModalActive)
	}
	const updateCurr = () => {
		setvarForUpdate(Math.random())
	}
	const SITE_URL = "https://3e98-95-26-80-219.ngrok-free.app"
	const dispatch = useDispatch()
	useEffect(() => {
		axios({
			method: "GET",
			url: `${SITE_URL}/api/v1/lk/bank_accounts`,
			headers: {
				"ngrok-skip-browser-warning": true,
				Authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
		})
			.then((response) => {
				dispatch(setBankAccounts(response.data))
			})
			.catch((err) => {
				console.log(err)
				if (err.response.status === 401) {
					alert("Ваша сессия истекла. Войдите снова")
					navigate("/entry", { replace: true })
				}
			})
	}, [varForUpdate])
	useEffect(() => {
		axios({
			method: "get",
			url: `${SITE_URL}/api/v1/lk/recommendations`,
			headers: {
				"ngrok-skip-browser-warning": true,
				Authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
		})
			.then((res) => {
				let temp = []
				for (let i = 0; i < res.data.length; i += 2) {
					temp.push([res.data[i], res.data[i + 1]])
				}
				setNews(temp)
			})
			.catch((err) => {
				console.error(err)
			})
	}, [])
	return (
		<>
			<OfferModal isModalActive={isOfferModalActive} handleClose={handleOfferButtonClick} />
			<CurrencyModal isModalActive={isCurrencyModalActive} handleClose={handleCurrencyButtonClick} updateCurr={updateCurr} />
			<Navbar />
			<MainPageDiv>
				<RateAndСhart>
					<LeftExchangeRate handleoffermodal={handleOfferButtonClick} handlecurrencymodal={handleCurrencyButtonClick} />
					<RightChart>
						<Chart />
					</RightChart>
				</RateAndСhart>
				<Recommendations data={news} />
			</MainPageDiv>
			<Footer />
		</>
	)
}

export default MainPage
