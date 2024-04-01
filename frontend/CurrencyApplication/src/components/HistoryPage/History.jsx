import React, { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import styled from "styled-components"
import { Button } from "./styles/Button"
import { SortButton } from "./styles/SortButton"
import { Order } from "./styles/Order"
import { Select } from "./styles/Select"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { generalErrorValid, generalErrorChange } from "../../redux/registerSlice"
import { useDispatch, useSelector } from "react-redux"
import { Loading } from "../Loading"
import axiosRetry from "axios-retry"
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay })
const CustomHistoryMainBlock = styled.div`
	padding: 64px 320px;
	min-width: 100%;
	min-height: 100%;
	background: #f1f7ff;
`

const CustomTitle = styled.p`
	font-size: 40px;
	font-family: "TT Travels";
	color: #213a8b;
`
const CustomButtonsBlock = styled.div`
	display: flex;
	width: fit-content;
	gap: 0 25px;
`

const CustomHistoryHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-bottom: 2px solid #213a8b33;
`

const CustomSortButtonsBlock = styled.div`
	& > *:not(:last-child) {
		border-right: 2px solid #213a8b33;
	}
`

const CustomHistoryList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: 50px 0;
`
const CustomDateTitle = styled.p`
	font-size: 24px;
	font-weight: 500;
	font-family: "TT Travels";
	padding: 16px;
	padding-bottom: 0px;
	color: #1d1f2480;
`

export const History = () => {
	const SERVER_URL = process.env.REACT_APP_BACKEND_URL
	let [currentSort, setCurrentSort] = useState("Покупки")
	let [currentCurrency, setCurrentCurrency] = useState("RUB")
	let [orders, setOrders] = useState([])
	let navigate = useNavigate()
	const dispatch = useDispatch()
	const loginData = useSelector((state) => state.login)

	useEffect(() => {
		console.log(loginData)
		if (!(sessionStorage.getItem("firstName") !== null && sessionStorage.getItem("lastName") !== null && sessionStorage.getItem("token") !== null)) {
			navigate("/", { replace: true })
			dispatch(generalErrorChange("Ваша сессия истекла. Войдите снова"))
			dispatch(generalErrorValid(true))
			setTimeout(() => {
				dispatch(generalErrorChange(null))
				dispatch(generalErrorValid(false))
			}, 20000)
			return
		}
		axios({
			method: "GET",
			url: `${SERVER_URL}/api/v1/lk/operations`,
			headers: {
				"ngrok-skip-browser-warning": true,
				Authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
		})
			.then((response) => {
				setOrders(response.data)
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
					navigate("/", { replace: true })
				}
			})
	}, [])
	const handleCurrencyButton = (e) => {
		setCurrentCurrency(e.target.textContent)
		switch (e.target.textContent) {
			case "Рубли (Р)":
				setCurrentCurrency("RUB")
				break
			case "Дирхам (DH)":
				setCurrentCurrency("AED")
				break
			case "Юани (¥)":
				setCurrentCurrency("CNY")
				break
		}
	}

	const handleSortButton = (e) => {
		setCurrentSort(e.target.textContent)
	}
	return (
		<div style={{ height: "100%" }}>
			<Navbar />
			<CustomHistoryMainBlock>
				<div style={{ width: "100%", display: "flex", alignItems: "end", flexDirection: "column", gap: "60px 0" }}>
					<CustomButtonsBlock>
						<Button content={"Юани (¥)"} active={currentCurrency === "CNY"} handlefunc={handleCurrencyButton} />
						<Button content={"Дирхам (DH)"} active={currentCurrency === "AED"} handlefunc={handleCurrencyButton} />
						<Button content={"Рубли (Р)"} active={currentCurrency === "RUB"} handlefunc={handleCurrencyButton} />
					</CustomButtonsBlock>
					<CustomHistoryHeader>
						<CustomSortButtonsBlock>
							<SortButton title={"Покупки"} active={currentSort === "Покупки"} handlefunc={handleSortButton} />
							<SortButton title={"Продажи"} active={currentSort === "Продажи"} handlefunc={handleSortButton} />
						</CustomSortButtonsBlock>
						<Select title={"Март"} data={["Текущая неделя", "Март", "3 месяца", "2024 год", "Указать период"]} width={170} />
					</CustomHistoryHeader>
					<CustomHistoryList>
						{!orders.length && <Loading />}
						{orders.map((item) => {
							if (
								(item.code === "BUY_FOREIGN_RUB" || item.code === "CONVERSION") &&
								currentSort === "Покупки" &&
								currentCurrency === item.credit_account_id.currency
							) {
								return (
									<Order
										created={item.created_at}
										expired={item.processedAt}
										state={item.status}
										typeOperation={item.code}
										idOperation={item.id}
										currency={item.credit_account_id.currency}
									/>
								)
							} else if (item.code === "SELL_FOREIGN_RUB" && currentSort === "Продажи" && currentCurrency === item.credit_account_id.currency) {
								return (
									<Order
										created={item.created_at}
										expired={item.processedAt}
										state={item.status}
										typeOperation={item.code}
										idOperation={item.id}
										currency={item.credit_account_id.currency}
									/>
								)
							}
						})}
					</CustomHistoryList>
				</div>
			</CustomHistoryMainBlock>
		</div>
	)
}
