import styled from "styled-components"
import Lypa from '../img/lypa.svg'
const RecommendationsInputDiv = styled.div`
    display: flex;
    justify-content: space-around;
`
const RecommendationsInputH1 = styled.h1`
    font-family: "TT Travels"; 
    color: #213A8B;
    font-size: 34px;
`
const Input = styled.input`
    width: 300px;
    border: 2px solid rgba(21, 25, 28, 0.25);
	border-radius: 40px;
	font-family: "TT Travels";
	font-weight: normal;
	font-size: 17px;
    padding-left: 20px;
	&:active {
		border-color: rgba(21, 25, 28, 0.24);
	}
`





const RecommendationsInput = ({title}) => {
    return(
        <RecommendationsInputDiv>
            <RecommendationsInputH1>{title}</RecommendationsInputH1>
            <Input/>
        </RecommendationsInputDiv>
    )
}

export default RecommendationsInput