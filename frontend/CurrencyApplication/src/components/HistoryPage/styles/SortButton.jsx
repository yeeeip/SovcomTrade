import React from "react"
import styled from "styled-components"

const CustomSortButton = styled.button`
	padding: 16px;
	background: none;
	border: none;
	font-family: "TT Travels";
	font-size: 24px;
	font-weight: 500;
	color: ${(props) => (props.active ? "#1D1F2480" : "#213A8B")};
	cursor: pointer;
`
export const SortButton = ({ title, active }) => {
	return <CustomSortButton active={active}>{title}</CustomSortButton>
}
