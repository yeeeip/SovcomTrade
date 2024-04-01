import styled from "styled-components"
import Lypa from "../img/lypa.svg"
import { SelectRecomendations } from "./SelectRecomendations"
const RecommendationsInputDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 32px;
`
const RecommendationsInputH1 = styled.h1`
	font-family: "TT Travels";
	color: #213a8b;
	font-size: 34px;
	font-weight: 500;
`
const Input = styled.input`
	width: 25%;
	border: 2px solid #213a8b99;
	border-radius: 40px;

	font-family: "TT Travels";
	font-weight: normal;
	font-size: 16px;
	padding: 15px 24px;
	&:focus {
		outline: none;
	}
`

const RecommendationsInput = ({ title, handlefunc, handlefilter }) => {
	return (
		<RecommendationsInputDiv>
			<RecommendationsInputH1>{title}</RecommendationsInputH1>
			<Input placeholder='Поиск новостей' onChange={handlefunc} />
			<SelectRecomendations data={["Дирхам", "Юани"]} handlefunc={handlefilter} />
		</RecommendationsInputDiv>
	)
}

export default RecommendationsInput
