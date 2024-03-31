import styled from "styled-components"

const CustomButton = styled.button`
	width: 100%;
	border-radius: 40px;
	background: #da5155;
	padding: 24px;
	text-align: center;
	color: #fdfdfd;
	font-family: "TT Travels";
	font-weight: 500;
	text-decoration: none;
	font-size: 24px;
	border: none;
	cursor: pointer;
`

const ButtonOpen = ({ title, handlefunc }) => {
	return <CustomButton onClick={handlefunc}>{title}</CustomButton>
}

export default ButtonOpen
