import React from "react"
import Navbar from "../Navbar/Navbar"
import styled from "styled-components"
import { Button } from "./styles/Button"
import { Calendar } from "./styles/Calendar"
import { SortButton } from "./styles/SortButton"
import { Order } from "./styles/Order"

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
	gap: 0 50px;
`
const CustomDateTitle = styled.p`
	font-size: 24px;
	font-weight: 500;
	font-family: "TT Travels";
	padding: 16px;
	color: #1d1f2480;
`
export const History = () => {
	return (
		<div style={{ height: "100%" }}>
			<Navbar />
			<CustomHistoryMainBlock>
				<CustomGrid>
					<CustomTitle>Уведомления</CustomTitle>
					<div style={{ width: "100%", display: "flex", alignItems: "end", flexDirection: "column", gap: "60px 0" }}>
						<CustomButtonsBlock>
							<Button content={"Юани (¥)"} />
							<Button content={"Дирхам (DH)"} />
							<Button content={"Рубли (Р)"} />
						</CustomButtonsBlock>
						<CustomHistoryHeader>
							<CustomSortButtonsBlock>
								<SortButton title={"tst"} active={false} />
								<SortButton title={"tst"} active={false} />
							</CustomSortButtonsBlock>
							<Calendar />
						</CustomHistoryHeader>
						<CustomHistoryList>
							<CustomDateTitle>Сегодня</CustomDateTitle>
							<Order />
						</CustomHistoryList>
					</div>
				</CustomGrid>
			</CustomHistoryMainBlock>
		</div>
	)
}
