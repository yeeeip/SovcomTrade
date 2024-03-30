import React from "react"
import styled from "styled-components"
import { OrderButton } from "./OrderButton"
import rub from "../img/rub.png"
import dh from "../img/dh.png"
import y from "../img/y.png"
const CustomOrderBlock = styled.div`
	display: flex;
	align-items: center;
	background: white;
	border-radius: 16px;
	border: 2px solid #213a8b33;
`

const CustomMainInfoBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 20px;
`
const CustomMainInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px 0;
`
const CustomIDInfo = styled.p`
	font-size: 16px;
	color: #1d1f2480;
	font-family: "TT Travels";
`
const CustomType = styled.p`
	font-family: "TT Travels";
	font-size: 24px;
	color: #213a8b;
`
const CustomStatusBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px 0;
	align-items: end;
`
const CustomStatusTitle = styled.p`
	font-family: "TT Travels";
	font-size: 16px;
	color: #1d1f2480;
`
const CustomStatus = styled.p`
	display: flex;
	align-items: center;
	gap: 0 10px;
	font-family: "TT Travels";
	font-size: 24px;
	color: #213a8b;
	& > span {
		display: block;
		width: 18px;
		height: 18px;
		background: ${(props) => (props.state === "ACTIVE" ? "#dacc51" : props.state === "SUCCESSFUL" ? "#61D6C0" : "#DA5155")};
		border-radius: 50%;
	}
`
export const Order = ({ state, typeOperation, idOperation, currency = "dh", created, expired }) => {
	let stateText = null
	let currencyIcon = null
	switch (currency) {
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
	switch (typeOperation) {
		case "BUY_FOREIGN_RUB":
			typeOperation = "Покупка за рубли"
			break
		case "SELL_FOREIGN_RUB":
			typeOperation = "Продажа за рубли"
			break
		case "CONVERSION":
			typeOperation = "Конверсия"
			break
	}
	switch (state) {
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
		<CustomOrderBlock>
			<img src={currencyIcon} alt='' style={{ padding: "0 0 0 15px" }} />
			<CustomMainInfoBlock>
				<CustomMainInfo>
					<CustomIDInfo>Номер операции: {idOperation}</CustomIDInfo>
					<CustomType>Тип: {typeOperation}</CustomType>
				</CustomMainInfo>
				<div style={{ display: "flex", alignItems: "center", gap: "0 20px" }}>
					<CustomStatusBlock>
						<CustomStatusTitle>Статус заявки</CustomStatusTitle>
						<CustomStatus state={state}>
							{stateText} <span></span>
						</CustomStatus>
					</CustomStatusBlock>
					<OrderButton created={created} expired={expired} />
				</div>
			</CustomMainInfoBlock>
		</CustomOrderBlock>
	)
}
