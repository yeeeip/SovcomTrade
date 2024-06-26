import styled from "styled-components"
import { SmallGreyText } from "../../../RegisterPage/styles/SmallGreyText"
const CustomInput = styled.input`
	border: 2px solid ${(props) => (props.caution === true ? "#DA5155" : "#213A8B")};
	border-radius: 20px;
	width: 400px;
	padding: 15px;
	font-family: "TT Travels";
	font-weight: normal;
	font-size: 14px;
`

const CustomInputField = styled.div`
	display: flex;
	flex-direction: column;
`

export const Input = ({ title, handlefunc, caution, errorMessage, typeInput }) => {
	return (
		<CustomInputField>
			<CustomInput type={typeInput || "text"} placeholder={!typeInput && title} onChange={handlefunc} caution={caution} />
			{caution && <SmallGreyText style={{ color: "red", marginTop: "5px" }}>{errorMessage}</SmallGreyText>}
		</CustomInputField>
	)
}
