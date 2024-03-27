import React from "react"
import styled from "styled-components"
const CustomButton = styled.button`
	font-family: "TT Travels";
	font-weight: 500;
	font-size: 16px;
	color: rgba(21, 25, 28, 0.5);

	width: fit-content;

	text-align: center;
	text-decoration: underline;

	background: none;
	border: none;

	cursor: pointer;
`
const CustomLinkButton = styled.a`
	display: block;

	font-family: "TT Travels";
	font-weight: 500;
	font-size: 16px;
	color: rgba(21, 25, 28, 0.5);

	width: fit-content;

	text-align: center;
	text-decoration: underline;

	background: none;
	border: none;

	cursor: pointer;
`

export const SmallButton = ({ href, content }) => {
	return <>{(href && <CustomLinkButton href={href}>{content}</CustomLinkButton>) || <CustomButton>{content}</CustomButton>}</>
}
