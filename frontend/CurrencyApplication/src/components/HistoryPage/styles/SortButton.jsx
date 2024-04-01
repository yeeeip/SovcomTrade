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
   	transition:all .25s;
	@media (max-width: 1400px) {
		font-size: 17px;
	}
`
export const SortButton = ({ title, active, handlefunc}) => {
	return <CustomSortButton active={active} onClick={handlefunc}>{title}</CustomSortButton>
}
