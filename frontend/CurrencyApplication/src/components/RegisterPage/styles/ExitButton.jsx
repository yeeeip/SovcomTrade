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
	@media (max-width: 1100px) {
		& > * {
			width: 35px;
		}
	}
	@media (max-width: 900px) {
		& > * {
			width: 28px;
		}
	}
`

export const ExitButton = () => {
	return (
		<CustomArrow href={"/"}>
			<span />
			<span />
		</CustomArrow>
	)
}
