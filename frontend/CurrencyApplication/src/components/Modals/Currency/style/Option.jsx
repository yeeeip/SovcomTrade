import styled from "styled-components"
import { CurrencyModal } from "../CurrencyModal"

const OptionLi = styled.li`
	width: 100%;
	display: flex;
	cursor: pointer;
	align-items: center;
	background: #fff;
	border: 2px solid #213a8b;
	border-radius: 40px;
	padding: 16px 24px;
`
const OptionSpan = styled.span`
	font-family: "TT Travels";
	font-size: 16px;
	color: #213a8b;
`

export const Option = ({ title, handlefunc }) => {
	return (
		<OptionLi onClick={handlefunc}>
			<OptionSpan>{title}</OptionSpan>
		</OptionLi>
	)
}
