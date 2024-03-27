import React from "react"
import styled from "styled-components"

const CustomArrow = styled.button`
	cursor: pointer;
	position: relative;
	display: block;
	max-width: 44px;
	width: 100%;
	max-height: 44px;
	height: 100%;
	border: none;
	background: none;
	& > * {
		position: absolute;
		width: 44px;
		height: 2px;
		background: rgba(199, 200, 201, 1);
		top: 48%;
		left: -3%;
	}
	& > *:nth-child(1) {
		transform: rotate(-45deg);
	}
	& > *:nth-child(2) {
		transform: rotate(45deg);
	}
`

export const ExitButton = () => {
	return (
		<CustomArrow>
			<span />
			<span />
		</CustomArrow>
	)
}
