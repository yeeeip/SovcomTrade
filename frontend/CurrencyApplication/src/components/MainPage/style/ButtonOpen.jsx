import styled from "styled-components"

const BuyingSellingA = styled.button`
	width: 100%;
	border-radius: 40px;
	background: white;
	padding: 24px;
	text-align: center;
	color: #213a8b;
	font-family: "TT Travels";
	font-weight: 500;
	text-decoration: none;
	font-size: 24px;
	border: 3px solid #213a8b99;
	margin-bottom: 16px;
	cursor: pointer;
	@media (max-width: 1400px) {
		padding: 16px;
		font-size: 20px;
	}
`

const BuyingSelling = ({ title, handlefunc }) => {
	return <BuyingSellingA onClick={handlefunc}>{title}</BuyingSellingA>
}

export default BuyingSelling
