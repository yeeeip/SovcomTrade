import React from "react"
import styled from "styled-components"
const CustomButton = styled.button`
	background: white;
	border: 2px solid #213a8b99;
	font-size: 24px;
	font-family: "TT Travels";
	color: "#213A8B";
	padding: 14px;
	border-radius: 25px;
	cursor: pointer;
`

export const Button = ({ content }) => {
	return <CustomButton>{content}</CustomButton>
}
