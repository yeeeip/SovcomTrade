import styled from "styled-components"

const OptionLi = styled.li`
	margin-top: 30px;
	display: flex;
	height: 55px;
	cursor: pointer;
	padding: 0 16px;
	border-radius: 8px;
	align-items: center;
	background: #fff;
	border: 2px solid #213a8b;
	border-radius: 40px;
`
const OptionSpan = styled.span`
	font-family: "TT Travels";
	font-size: 18px;
	color: #333;
`

export const Option = ({ title, handlefunc }) => {
	return (
		<OptionLi onClick={handlefunc}>
			<OptionSpan>{title}</OptionSpan>
		</OptionLi>
	)
}
