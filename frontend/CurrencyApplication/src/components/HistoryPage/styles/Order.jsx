import React from "react"
import styled from "styled-components"
import { OrderButton } from "./OrderButton"
import rub from "../img/rub.png"
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
		background: #dacc51;
		border-radius: 50%;
	}
`
export const Order = () => {
	return (
		<CustomOrderBlock>
			<img src={rub} alt='' style={{ padding: "0 0 0 15px" }} />
			<CustomMainInfoBlock>
				<CustomMainInfo>
					<CustomIDInfo>Номер операции: 564697391</CustomIDInfo>
					<CustomType>Тип: Конверсия в рубли</CustomType>
				</CustomMainInfo>
				<div style={{ display: "flex", alignItems: "center", gap: "0 20px" }}>
					<CustomStatusBlock>
						<CustomStatusTitle>Статус заявки</CustomStatusTitle>
						<CustomStatus>
							Активная <span></span>
						</CustomStatus>
					</CustomStatusBlock>
					<OrderButton />
				</div>
			</CustomMainInfoBlock>
		</CustomOrderBlock>
	)
}
