import styled from "styled-components"
import Lypa from '../img/lypa.svg'
const RecommendationsInputDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:32px;
`
const RecommendationsInputH1 = styled.h1`
    font-family: "TT Travels"; 
    color: #213A8B;
    font-size: 34px;
    font-weight:500;
`
const Input = styled.input`
    width: 25%;
    border: 2px solid #213A8B99;
	border-radius: 40px;

	font-family: "TT Travels";
	font-weight: normal;
	font-size: 16px;
  padding:15px 24px;
   &:focus{
      outline:none;
   }

`

const RecommendationsInput = ({title}) => {
    return(
        <RecommendationsInputDiv>
            <RecommendationsInputH1>{title}</RecommendationsInputH1>
            <Input placeholder="Поиск новостей"/>
        </RecommendationsInputDiv>
    )
}

export default RecommendationsInput