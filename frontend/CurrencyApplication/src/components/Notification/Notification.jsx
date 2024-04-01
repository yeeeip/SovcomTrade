import React, { useEffect, useState } from "react"
import styled from "styled-components"
import rub from "../HistoryPage/img/rub.png"
import dh from "../HistoryPage/img/dh.png"
import y from "../HistoryPage/img/y.png"
import axios from "axios"
import { OrderButton } from "./OrderButton"
const CustomNotification = styled.div`
	position: fixed;
	top: 0;
	right: ${(props) => (props.active ? "0" : "-100%")};
	width: 40%;
	height: 100%;
	background: #fdfdfd;
	border: 2px solid #213a8b33;
	display: flex;
	flex-direction: column;
	padding: 0 16px;
	z-index: 50;
	transition: all 0.5s;
`
const CustomNotifHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 15px 0;
`
const CustomNotifTitle = styled.p`
	font-family: "TT Travels";
	font-size: 24px;
	font-weight: 500;
	color: #213a8b;
`
const CustomNotifList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px 0;
`
const CustomNotif = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0 20px;
	padding: 16px;
	border: 2px solid #213a8b33;
	border-radius: 16px;
`
const CustomNotifStatusThing = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: -4px;
	width: 4px;
	height: 80%;
	border-radius: 4px;
	background: ${(props) => (props.state === "ACTIVE" ? "#dacc51" : props.state === "SUCCESSFUL" ? "#61D6C0" : "#DA5155")};
`
const CustomNotifImg = styled.img`
	width: 36px;
	height: 36px;
	background: url(${(props) => props.bg}) cover no-repeat;
`
const CustomNotifInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 8px 0;
`
const CustomNotifID = styled.p`
	font-family: "TT Travels";
	font-size: 16px;
	color: #1d1f2480;
`
const CustomNotifStatus = styled.p`
	font-family: "TT Travels";
	font-size: 16px;
	color: #213a8b;
`
const CustomNotifDelete = styled.p`
	font-family: "TT Travels";
	font-size: 16px;
	color: #213a8b;
	text-align: center;
	text-decoration: underline;
	cursor: pointer;
`
const CustomExitButton = styled.div`
	width: 44px;
	height: 44px;
	z-index: 51;
	position: relative;
	cursor: pointer;
	& > * {
		width: 100%;
		height: 2px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: #c7c8c9;
	}

	& > *:first-child {
		transform: rotate(45deg);
	}
	& > *:last-child {
		transform: rotate(-45deg);
	}
`
const CustomInfoText = styled.p`
	font-family: "TT Travels";
	font-size: 20px;
	color: #213a8b;
	text-align: center;
`

export const Notification = ({ active, handlefunc }) => {
	let [data, setData] = useState([])
	const SERVER_URL = process.env.REACT_APP_BACKEND_URL
	useEffect(() => {
		axios({
			method: "get",
			url: `${SERVER_URL}/api/v1/lk/notifications`,
			headers: {
				"ngrok-skip-browser-warning": true,
				Authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
		})
			.then((res) => {
				console.log(res)
				setData(res.data)
			})
			.catch((err) => {
				console.error(err)
			})
	}, [])
	return (
		<CustomNotification active={active}>
			<CustomNotifHeader>
				<CustomNotifTitle>Уведомления</CustomNotifTitle>
				<CustomExitButton onClick={handlefunc}>
					<span></span>
					<span></span>
				</CustomExitButton>
			</CustomNotifHeader>
			<CustomNotifList>
				{data.map((item, index) => {
					let stateText = null
					let currencyIcon = null
					switch (item.operation.debit_account_id.currency) {
						case "RUB":
							currencyIcon = rub
							break
						case "AED":
							currencyIcon = dh
							break
						case "CNY":
							currencyIcon = y
							break
					}

					switch (item.operation.status) {
						case "ACTIVE":
							stateText = "Активна"
							break
						case "SUCCESSFUL":
							stateText = "Исполнена"
							break
						case "EXPIRED":
							stateText = "Просрочена"
							break
					}
					return (
						<CustomNotif>
							<CustomNotifImg src={currencyIcon} />
							<CustomNotifInfo>
								<CustomNotifID>
									Операция от {new Date(item.createdAt).getDate()}.
									{new Date(item.createdAt).getMonth() + 1 > 10
										? new Date(item.createdAt).getMonth()
										: "0" + (new Date(item.createdAt).getMonth() + 1)}
									.{new Date(item.createdAt).getFullYear()}
								</CustomNotifID>
								<CustomNotifStatus>Состояние: {stateText}</CustomNotifStatus>
							</CustomNotifInfo>
							<OrderButton info={item.info} />
							<CustomNotifStatusThing state={item.operation.status} />
						</CustomNotif>
					)
				})}
				{data.length === 0 && <CustomInfoText>Уведомлений нет</CustomInfoText>}
				{data.length !== 0 && <CustomNotifDelete>Удалить все уведомления</CustomNotifDelete>}
			</CustomNotifList>
		</CustomNotification>
	)
}
