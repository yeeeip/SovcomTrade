import styled from "styled-components"
import Money from "../img/money.svg"
import Next from "../img/slider.svg"

const SlideDiv = styled.div`
	width: 100%;
   height:100%;
	border-radius: 16px;
	background-image: url(${Money});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
   justify-content:space-between;
   align-items: end;
   padding:24px 16px;
`
const SlideInfo = styled.div`
	display: flex;
	flex-direction: column;
   width:60%;
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
const SlideA = styled.a`
`

const Slide = ({ titleOne, titleTwo, href }) => {
	return (
		<SlideDiv>
			<SlideInfo>
				<SlideH1>{titleOne}</SlideH1>
				<SlideSpan>{titleTwo}</SlideSpan>
			</SlideInfo>
			<SlideA href={href}>
				<img src={Next} />
			</SlideA>
		</SlideDiv>
	)
}

export default Slide
