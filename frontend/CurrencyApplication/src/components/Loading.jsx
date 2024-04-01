import React from "react"
import styled from "styled-components"
const CustomLoading = styled.div`
	display: flex;
	justify-content: center;
	& > div {
		width: 2rem;
		height: 2rem;
		margin: 2rem 0.2rem;
		background: #8385aa;
		border-radius: 50%;
		animation: loading 0.6s infinite alternate;
	}

	& > div:nth-child(2) {
		animation-delay: 0.2s;
	}

	& > div:nth-child(3) {
		animation-delay: 0.4s;
	}
`

export const Loading = () => {
	return (
		<CustomLoading>
			<div></div>
			<div></div>
			<div></div>
		</CustomLoading>
	)
}
