import styled from "styled-components"
import Arrow from '../../img/arrow.svg'

const SelectDiv = styled.div`
    display: flex;
    width: 400px;
    height: 55px;
    background: #fff;
    padding: 20px;
    font-size: 18px;
    font-weight: 400;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    border: 2px solid #213A8B;
    border-radius: 40px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    font-family: "TT Travels";
`
const SelectSpan = styled.span`
    
`
const SelectImg = styled.img`
    
`

export const Select = ({title}) => {
    return(
        <SelectDiv>
            <SelectSpan>{title}</SelectSpan>
            <SelectImg src={Arrow}/>
        </SelectDiv>
    )
}
