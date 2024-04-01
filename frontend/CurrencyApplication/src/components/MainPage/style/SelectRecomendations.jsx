import React, { useState } from "react"
import styled from "styled-components"
import filter from "../img/filter.svg"

const CustomSelect = styled.div`
	position: relative;
`
const CustomValue = styled.div`
	font-family: "TT Travels";
	font-size: 24px;
	color: #213a8b;
	font-weight: 500;
	cursor: pointer;
	user-select: none;
	display: flex;
	gap: 0 10px;
	align-items: center;
`
const CustomList = styled.div`
	display: ${(props) => (props.isselecting ? "flex" : "none")};
	flex-direction: column;
	padding: 0 16px;
	border: 1px solid #213a8b99;
	background: #fdfdfd;
	border-radius: 16px;
	position: absolute;
	width: ${(props) => props.width + "px"};
	top: 30px; /* position the top  edge of the element at the middle of the parent */
	right: 0;
	height: fit-content;
	& > *:not(:last-child) {
		border-bottom: 2px solid #1d1f241a;
	}
`
const CustomOption = styled.div`
	font-family: "TT Travels";
	font-size: 16px;
	color: #213a8b;
	padding: 16px 0;
	text-align: center;
	cursor: pointer;
	user-select: none;
	z-index: 100;
`

export const SelectRecomendations = ({ title, data = [], width, handlefunc }) => {
	let [isSelecting, setIsSelecting] = useState(false)
	const handleOpenButton = () => {
		setIsSelecting(!isSelecting)
	}
	const handleSelect = (e) => {
		setIsSelecting(!isSelecting)
		handlefunc(e.target.textContent)
	}
	return (
		<CustomSelect>
			<CustomValue onClick={handleOpenButton}>
				<img src={filter} alt='' style={{ width: "44px", height: "44px" }} />
			</CustomValue>
			<CustomList isselecting={isSelecting} width={width}>
				{data.map((item, index) => {
					return (
						<CustomOption key={index} onClick={handleSelect}>
							{item}
						</CustomOption>
					)
				})}
			</CustomList>
		</CustomSelect>
	)
}
