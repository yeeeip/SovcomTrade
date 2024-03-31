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
	const [isOfferModalActive, setIsOfferModalActive] = useState(false)
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
	return (
		<>
			<OfferModal isModalActive={isOfferModalActive} handleClose={handleOfferButtonClick} />
			<CurrencyModal isModalActive={isCurrencyModalActive} handleClose={handleCurrencyButtonClick} updateCurr={updateCurr} />
			<Navbar />
			<MainPageDiv>
				<RateAndСhart>
					<LeftExchangeRate handleoffermodal={handleOfferButtonClick} handlecurrencymodal={handleCurrencyButtonClick} />
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
