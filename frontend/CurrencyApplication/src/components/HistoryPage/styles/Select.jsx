import React, { useState } from "react"
import styled from "styled-components"
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
	display: ${(props) => (props.isSelecting ? "flex" : "none")};
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
`
const CustomArrow = styled.div`
	width: 12px;
	height: 18px;
	position: relative;
	& > * {
		position: absolute;
		left: 0;
		background: #213a8b99;
		width: 14px;
		height: 2px;
	}
	& > *:nth-child(1) {
		top: 17%;
		transform: rotate(45deg);
	}
	& > *:nth-child(2) {
		bottom: 17%;
		transform: rotate(-45deg);
	}
`
export const Select = ({ title, data = [], width }) => {
	let [isSelecting, setIsSelecting] = useState(false)
	let [currentValue, setCurrentValue] = useState(title)
	const handleOpenButton = () => {
		setIsSelecting(!isSelecting)
	}
	const handleSelect = (e) => {
		setIsSelecting(!isSelecting)
		setCurrentValue(e.target.textContent)
	}
	return (
		<CustomSelect>
			<CustomValue onClick={handleOpenButton}>
				<CustomArrow style={{ transform: "rotate(180deg)" }}>
					<span></span>
					<span></span>
				</CustomArrow>
				{currentValue}
				<CustomArrow>
					<span></span>
					<span></span>
				</CustomArrow>
			</CustomValue>
			<CustomList isSelecting={isSelecting} width={width}>
				{data.map((item) => {
					return <CustomOption onClick={handleSelect}>{item}</CustomOption>
				})}
			</CustomList>
		</CustomSelect>
	)
}
