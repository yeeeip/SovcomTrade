import styled from "styled-components"

const CustomInput = styled.input`
	border: 2px solid #213A8B;
	border-radius: 20px;
	padding: 15px;
	font-family: "TT Travels";
	font-weight: normal;
	font-size: 14px;
`

const CustomInputField = styled.div`
	display: flex;
	flex-direction: column;
`


export const Input = ({title}) => {
    return(
        <CustomInputField>
            <CustomInput type="text" placeholder={title}/>
        </CustomInputField>
    )
}