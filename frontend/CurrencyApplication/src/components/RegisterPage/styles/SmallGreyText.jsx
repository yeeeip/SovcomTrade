import React from "react"
import styled from "styled-components"
const CustomText = styled.p`
	font-family: "TT Travels";
	font-size: 16px;
	color: rgba(29, 31, 36, 0.5);
	width: fit-content;
`

export const SmallGreyText = ({ children }) => {
	return <CustomText>{children}</CustomText>
}
