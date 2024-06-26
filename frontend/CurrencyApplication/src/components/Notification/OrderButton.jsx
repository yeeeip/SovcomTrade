import React, { useState } from "react"
import styled from "styled-components"

const CustomOrderButton = styled.button`
	position: relative;
	background: white;
	border: 2px solid #213a8b33;
	border-radius: 40px;
	padding: 18px;
	display: flex;
	gap: 0 5px;
	cursor: pointer;
	& > * {
		width: 5px;
		height: 5px;
		background: #1d1f2433;
		border-radius: 50%;
	}
`
const CustomList = styled.div`
	display: ${(props) => (props.isopen ? "flex" : "none")};
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
	z-index: 50;
`
const CustomOption = styled.div`
	font-family: "TT Travels";
	font-size: 16px;
	color: #213a8b;
	padding: 16px 0;
	text-align: center;
`
export const OrderButton = ({ info }) => {
	let [isOpen, setIsOpen] = useState(false)
	const handleOpenButton = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div style={{ position: "relative" }}>
			<CustomOrderButton onClick={handleOpenButton}>
				<span></span>
				<span></span>
				<span></span>
			</CustomOrderButton>
			<CustomList width={300} isopen={isOpen}>
				<CustomOption>{info}</CustomOption>
			</CustomList>
		</div>
	)
}
