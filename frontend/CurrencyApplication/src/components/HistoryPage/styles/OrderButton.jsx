import React from "react"
import styled from "styled-components"

const CustomOrderButton = styled.button`
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

export const OrderButton = () => {
	return (
		<CustomOrderButton>
			<span></span>
			<span></span>
			<span></span>
		</CustomOrderButton>
	)
}
