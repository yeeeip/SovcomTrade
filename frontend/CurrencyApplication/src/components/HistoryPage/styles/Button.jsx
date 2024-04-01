import React from "react"
import styled from "styled-components"
const CustomButton = styled.button`
	background: ${props => props.active ? '#213A8B' : '#FDFDFD'};
	color: ${props => props.active ? '#FDFDFD' : '#213A8B'};

	border: 2px solid #213a8b99;
	font-size: 24px;
	font-family: "TT Travels";
	padding: 14px;
	border-radius: 25px;
	cursor: pointer;
    transition:all .25s;
	@media (max-width: 1400px) {
		font-size: 17px;
		padding: 10px;
	}
`

export const Button = ({ content, handlefunc, active }) => {
	return <CustomButton onClick={handlefunc} active={active}>{content}</CustomButton>
}
