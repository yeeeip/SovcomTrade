import styled from "styled-components"
import Arrow from "../../img/arrow.svg"
import { SmallGreyText } from "../../../RegisterPage/styles/SmallGreyText"
const SelectDiv = styled.div`
	width: 400px;
	display: flex;
	background: #fff;
	padding: 16px 24px;
	font-size: 18px;
	font-weight: 400;
	align-items: center;
	cursor: pointer;
	justify-content: space-between;
	border: 2px solid #213a8b;
	border-radius: 40px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	font-family: "TT Travels";
	z-index: 2;
`
const SelectSpan = styled.span`
	color: ${(props) => (props.caution === true ? "#DA5155" : "#213A8B")};
`
const SelectImg = styled.img``

export const Select = ({ title, funcHandleToggleMenu, caution, errorMessage }) => {
	return (
		<>
			<SelectDiv onClick={funcHandleToggleMenu}>
				<SelectSpan caution={caution}>{title}</SelectSpan>
				<SelectImg src={Arrow} />
			</SelectDiv>
			{caution && <SmallGreyText style={{ color: "red" }}>{errorMessage}</SmallGreyText>}
		</>
	)
}
