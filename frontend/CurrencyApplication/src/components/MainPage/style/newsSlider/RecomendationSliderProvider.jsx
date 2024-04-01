import React, { useState } from "react"
import styled from "styled-components"
import { NextButton } from "../../../RegisterPage/styles/Slider/NextButton"
import { PrevButton } from "../../../RegisterPage/styles/Slider/PrevButton"

const CustomSliderProvider = styled.div`
	width: ${(props) => props.width + "px"};
	height: ${(props) => props.height + "px"};
	overflow: hidden;
	position: relative;
`
const CustopSliderLine = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: ${(props) => props.offset + "px"};
	display: flex;
	gap: 0 88px;
	transition: all 0.5s;
`
export const RecomendationSliderProvider = ({ children, width, height }) => {
	let [offset, setOffset] = useState(0)
	const getFullWidth = () => {
		return 368 * (children.length - 1) + 88 * (children.length - 1)
	}
	const handleNextButton = () => {
		if (offset - (368 + 88) < -1 * getFullWidth() + 368 * 2 + 88) {
			setOffset(0)
		} else {
			setOffset((offset -= 368 + 88))
		}
	}
	const handlePrevButton = () => {
		if (offset + 368 + 88 > 0) {
			setOffset(-1 * getFullWidth() + 368 * 2 + 88 * 2)
		} else {
			setOffset((offset += 368 + 88))
		}
	}
	return (
		<div style={{ position: "relative" }}>
			<NextButton boxheight={height} handlefunc={handleNextButton} />
			<CustomSliderProvider width={width} height={height}>
				<CustopSliderLine offset={offset}>{children}</CustopSliderLine>
			</CustomSliderProvider>
			<PrevButton boxheight={height} handlefunc={handlePrevButton} />
		</div>
	)
}
