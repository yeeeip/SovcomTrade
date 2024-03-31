import styled from "styled-components"
import Arrow from "../../img/arrow.svg"

const SelectDiv = styled.div`
	width: 100%;
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
const SelectSpan = styled.span``
const SelectImg = styled.img`
	transition: transform 0.5s;
	transform: rotate(${(props) => (props.isActive ? "180deg" : "0deg")});
`

export const Select = ({ title, funcHandleToggleMenu, isActive }) => {
	return (
		<SelectDiv onClick={funcHandleToggleMenu}>
			<SelectSpan>{title}</SelectSpan>
			<SelectImg isActive={isActive} src={Arrow} />
		</SelectDiv>
	)
}
