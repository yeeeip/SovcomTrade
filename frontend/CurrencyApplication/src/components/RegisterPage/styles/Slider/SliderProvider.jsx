import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { NextButton } from "./NextButton"
import { PrevButton } from "./PrevButton"
import { useDispatch, useSelector } from "react-redux"
import { Input } from "../Input"
const CustomSliderProvider = styled.div`
	width: ${(props) => props.width + "px"};
	height: ${(props) => props.height + "px"};
	overflow: hidden;
	position: relative;
`
const CustomDiv = styled.div`
	width: ${(props) => props.width + "px"};
	height: ${(props) => props.height + "px"};
	display: flex;
	align-content: center;
	position: relative;
`
const CustomSlider = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: ${(props) => props.offset + "px"};
	display: flex;
	gap: 0 50px;
	transition: all 0.5s;
`
const CustomSlide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px 0;
	height: 100%;
	max-width: ${(props) => props.width + "px"};
	min-width: ${(props) => props.width + "px"};
	width: 100%;
`

export const SliderProvider = ({ data, width, height }) => {
	let [offset, setOffset] = useState(0)

	const register = useSelector((state) => state.register)

	const getFullWidth = () => {
		return width * (data.length - 1) + 50 * (data.length - 1)
	}
	const handleNextButton = () => {
		if (offset - (width + 50) < -1 * getFullWidth()) {
			setOffset(0)
		} else {
			setOffset((offset -= width + 50))
		}
	}
	const handlePrevButton = () => {
		if (offset + width + 50 > 0) {
			setOffset(-1 * getFullWidth())
		} else {
			setOffset((offset += width + 50))
		}
	}
	return (
		<CustomDiv width={width} height={height}>
			<NextButton boxheight={height} handlefunc={handleNextButton} />
			<CustomSliderProvider width={width} height={height}>
				<CustomSlider offset={offset}>
					{data.map((item, index) => {
						return (
							<CustomSlide key={index} width={width}>
								{item.map((itemData, indexSecond) => {
									console.log(typeof register[itemData.target]?.valid, register, itemData.target)
									return (
										<Input
											target={itemData.target}
											title={itemData.title}
											key={indexSecond}
											caution={typeof register[itemData.target]?.valid == "string"}
											errorMessage={typeof register[itemData.target]?.valid == "string" ? register[itemData.target].valid : false}
										/>
									)
								})}
							</CustomSlide>
						)
					})}
				</CustomSlider>
			</CustomSliderProvider>
			<PrevButton boxheight={height} handlefunc={handlePrevButton} />
		</CustomDiv>
	)
}
