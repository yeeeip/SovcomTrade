import styled from "styled-components"

const ButtonOpenDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    border: 2px solid #DA5155;
    border-radius: 40px;
    margin-bottom: 20px;
    background: #DA5155;
`
const ButtonOpenA = styled.a`
    color: white;
    display: flex;
    text-decoration: none;
    font-family: "TT Travels";
    padding: 27px 80px;
    font-size: 21px;
`

const ButtonOpen = ({title, href}) => {
    return(
        <ButtonOpenDiv>
            <ButtonOpenA href={href}>{title}</ButtonOpenA>
        </ButtonOpenDiv>
    )
}

export default ButtonOpen