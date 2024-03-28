import styled from "styled-components"
import SC from "../../Navbar/img/SC.png"

const CallDiv = styled.div`
    background: white;
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const CallDivH1 = styled.a`
    font-family: "TT Travels"; 
    color: #213A8B;
    font-size: 34px;
`



const Call = ({title}) => {
    return(
        <CallDiv>
            <img style={{width:"50px", height:"27px"}} src={SC}/>
            <CallDivH1 href="#">{title}</CallDivH1>
        </CallDiv>
    )
} 

export default Call