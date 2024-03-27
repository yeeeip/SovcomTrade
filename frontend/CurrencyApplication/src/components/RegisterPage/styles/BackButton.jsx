import React from "react"
import styled from "styled-components"

const CustomArrow = styled.a`
	cursor: pointer;
	position: relative;
	display: block;
	max-width: 44px;
	width: 100%;
	max-height: 44px;
	height: 100%;

	background: none;
	border: 2px solid rgba(21, 25, 28, 0.25);
	border-radius: 50%;
	& > * {
		position: absolute;
		width: 16px;
		height: 2px;
		background: rgba(21, 25, 28, 0.75);
		left: 27%;
	}
	& > *:nth-child(1) {
		top: 35%;
		transform: rotate(-45deg);
	}
	& > *:nth-child(2) {
		top: 60%;
		transform: rotate(45deg);
	}
`

export const BackButton = ({ href }) => {
	return (
		<CustomArrow href={href}>
			<span />
			<span />
		</CustomArrow>
	)
}
