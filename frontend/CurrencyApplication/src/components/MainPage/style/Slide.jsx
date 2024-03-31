import styled from "styled-components"
import Money from "../img/money.svg"
import Next from "../img/slider.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SlideDiv = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 16px;
	overflow: hidden;
	cursor: pointer;
`
const SlideBg = styled.div`
	background-image: url(${Money});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	filter: brightness(0.5);
	width: 100%;
	height: 100%;
`
const SlideInfo = styled.div`
	justify-content: space-between;
	align-items: end;
	padding: 24px 16px;
	position: absolute;
	z-index: 50;
	top: ${(props) => (props.swap ? "0" : "100%")};
	transition: all 0.5s;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`
const SlideH1 = styled.h1`
	padding-bottom: 10px;
	font-family: "TT Travels";
	color: white;
	font-size: 21px;
`
const SlideSpan = styled.span`
	font-family: "TT Travels";
	color: white;
	font-size: 14px;
`
const SlideDopInfo = styled.div`
	justify-content: space-between;
	z-index: 50;
	align-items: end;
	padding: 24px 16px;
	position: absolute;
	top: ${(props) => (props.swap ? "-100%" : "0")};
	transition: all 0.5s;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`
const Slide = ({ titleOne, titleTwo, href, dopInfo }) => {
	const navigate = useNavigate()
	const [swap, setSwap] = useState(true)
	const handleSwapButton = () => setSwap(!swap)
	return (
		<SlideDiv
			onClick={() => {
				navigate()
			}}
			onMouseLeave={handleSwapButton}
		>
			<SlideBg />
			<SlideInfo swap={swap} onMouseEnter={handleSwapButton}>
				<SlideH1>{titleOne}</SlideH1>
				<SlideSpan>{titleTwo}</SlideSpan>
			</SlideInfo>
			<SlideDopInfo swap={swap}>
				<SlideSpan>
					{titleTwo}
					{titleTwo}
					{titleTwo}
					{titleTwo}
				</SlideSpan>
			</SlideDopInfo>
		</SlideDiv>
	)
}

export default Slide
