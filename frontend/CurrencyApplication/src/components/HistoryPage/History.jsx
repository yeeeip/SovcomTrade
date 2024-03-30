import React, { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import styled from "styled-components"
import { Button } from "./styles/Button"
import { SortButton } from "./styles/SortButton"
import { Order } from "./styles/Order"
import { Select } from "./styles/Select"
import axios from "axios"

const CustomHistoryMainBlock = styled.div`
	padding: 64px 320px;
	min-width: 100%;
	min-height: 100%;
	background: #f1f7ff;
`

const CustomGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 40% 60%;
	gap: 0 80px;
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
	const SITE_URL = "https://0aec-95-26-80-219.ngrok-free.app"
	let [currentSort, setCurrentSort] = useState("Покупки")
	let [currentCurrency, setCurrentCurrency] = useState("Юани (¥)")
	let [orders, setOrders] = useState([])
	useEffect(() => {
		axios({
			method: "GET",
			url: `${SITE_URL}/api/v1/lk/operations`,
			headers: {
				"ngrok-skip-browser-warning": true,
				Authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
		})
			.then((response) => {
				console.log(response)
				setOrders(response.data)
			})
			.catch((err) => {
				console.log(err)
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
				<CustomGrid>
					<CustomTitle>Уведомления</CustomTitle>
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
							<CustomDateTitle>Сегодня</CustomDateTitle>
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
								} else if (
									item.code === "SELL_FOREIGN_RUB" &&
									currentSort === "Продажи" &&
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
								}
							})}
						</CustomHistoryList>
					</div>
				</CustomGrid>
			</CustomHistoryMainBlock>
		</div>
	)
}
