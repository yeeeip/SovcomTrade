import React, { useState } from "react"
import styled from "styled-components"
import { NextButton } from "./NextButton"
import { PrevButton } from "./PrevButton"

const CustomSliderProvider = styled.div`
		width: ${(props) => props.width + "px"};
	height: ${(props) => props.height + "px"};
	overflow: hidden;
	position: relative;
   margin-bottom: 30px;
`
const CustopSliderLine = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: ${(props) => props.offset + "px"};
	display: flex;
	gap: 0 50px;
	transition: all 0.5s;
`

export const SliderProvider = ({ children, height, width }) => {
	const [offset, setOffset] = useState(0)
	const getFullHeight = () => {
		return 90 * children.length + 16 * (children.length - 1)
	}
	const handleUpButton = () => {
		if (offset - 106 < getFullHeight() * -1 + 90 * 3 + 16 * 2) {
			setOffset(0)
		} else {
			setOffset(offset - 106)
		}
	}
	const handleDownButton = () => {
		if (offset + 106 > 0) {
			setOffset(getFullHeight() * -1 + 90 * 3 + 16 * 2)
		} else {
			setOffset(offset + 106)
		}
	}
	return (
		<div style={{ marginBottom: "30px" }}>
			<CustomSliderProvider height={height} width={width}>
				<CustopSliderLine offset={offset}>{children}</CustopSliderLine>
			</CustomSliderProvider>
			<div style={{ width: "50%", display: "flex", justifyContent: "space-around", margin: "0 auto" }}>
				<NextButton handlefunc={handleUpButton} />
				<PrevButton handlefunc={handleDownButton} />
			</div>
		</div>
	)
}
