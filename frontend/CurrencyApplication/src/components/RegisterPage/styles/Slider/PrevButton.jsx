import React from "react"
import styled from "styled-components"
const CustomButton = styled.button`
	cursor: pointer;
	background: none;
	position: absolute;
	top: ${(props) => Math.round(props.boxheight / 2) - 25 + "px"};
	right: 105%;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	border: 2px solid rgba(33, 58, 139, 1);
	& > * {
		width: 25px;
		height: 2px;
		position: absolute;
		right: 27%;
		background: rgba(33, 58, 139, 1);
	}
	& > *:nth-child(1) {
		top: 35%;
		transform: rotate(-30deg);
	}
	& > *:nth-child(2) {
		transform: rotate(30deg);
		top: 61%;
	}
	@media (max-width: 1100px) {
		top: 180px;
		width: 40px;
		height: 40px;
		* {
			width: 20px;
			height: 20px;
		}
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
