import React from "react"
import styled from "styled-components"
const CustomButton = styled.button`
	cursor: pointer;
	position: relative;
	background: none;
	border: none;
	width: 40px;
	height: 15px;
	& > * {
		width: 22px;
		height: 2px;
		position: absolute;
		right: 0;
		background: rgba(33, 58, 139, 1);
	}
	& > *:nth-child(1) {
		transform: rotate(-30deg);
		left: 0;
	}
	& > *:nth-child(2) {
		transform: rotate(30deg);
	}
`
export const PrevButton = ({ handlefunc, boxheight }) => {
	return (
		<CustomButton boxheight={boxheight} onClick={handlefunc}>
			<span></span>
			<span></span>
		</CustomButton>
	)
}
