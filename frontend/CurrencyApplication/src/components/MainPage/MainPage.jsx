import styled from "styled-components"
import Navbar from "../Navbar/Navbar.jsx"
import LeftExchangeRate from "./ComponentMainPage/LeftExchangeRate.jsx"
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
import { setOfferOpen } from "../../redux/offerModalSlice.js"
import { generalErrorValid, generalErrorChange } from "../../redux/registerSlice.js"
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
	const [news, setNews] = useState([])
	const [varForUpdate, setvarForUpdate] = useState(0)
	const loginData = useSelector((state) => state.login)
	let navigate = useNavigate()

	const updateCurr = () => {
		setvarForUpdate(Math.random())
	}
	const SERVER_URL = process.env.REACT_APP_BACKEND_URL
	const dispatch = useDispatch()
	useEffect(() => {
		if (!(sessionStorage.getItem("firstName") !== null && sessionStorage.getItem("lastName") !== null && sessionStorage.getItem("token") !== null)) {
			dispatch(generalErrorChange("Ваша сессия истекла. Войдите снова"))
			dispatch(generalErrorValid(true))
			setTimeout(() => {
				dispatch(generalErrorChange(null))
				dispatch(generalErrorValid(false))
			}, 20000)
			navigate("/entry", { replace: true })

			return
		}
		axios({
			method: "GET",
			url: `${SERVER_URL}/api/v1/lk/bank_accounts`,
			headers: {
				"ngrok-skip-browser-warning": true,
				Authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
		})
			.then((response) => {
				console.log(response)
				dispatch(setBankAccounts(response.data))
			})
			.catch((err) => {
				console.log(err)
				if (err.response.status === 401) {
					dispatch(generalErrorChange("Ваша сессия истекла. Войдите снова"))
					dispatch(generalErrorValid(true))
					setTimeout(() => {
						dispatch(generalErrorChange(null))
						dispatch(generalErrorValid(false))
					}, 20000)
					navigate("/entry", { replace: true })
				}
			})
	}, [varForUpdate])
	useEffect(() => {
		axios({
			method: "get",
			url: `${SERVER_URL}/api/v1/lk/recommendations`,
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
				console.log(res.data[0].news.newsUrl)
				setNews(temp)
			})
			.catch((err) => {
				console.error(err)
			})
	}, [])
	return (
		<>
			<OfferModal />
			<CurrencyModal updateCurr={updateCurr} />
			<Navbar />
			<MainPageDiv>
				<RateAndСhart>
					<LeftExchangeRate />
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
