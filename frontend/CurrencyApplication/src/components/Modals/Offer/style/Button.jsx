import styled from "styled-components"

const BuyingSellingDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 298px;
    height: 70px;
    border-radius: 40px;
    margin-bottom: 20px;
    background: #DA5155;
    margin-top: 25px;
`
const BuyingSellingA = styled.a`
    color: white;
    display: flex;
    text-decoration: none;
    font-family: "TT Travels";
    padding: 27px 80px;
    font-size: 17px;
`

const Button = ({title, href}) => {
    return(
        <BuyingSellingDiv>
            <BuyingSellingA href={href}>{title}</BuyingSellingA>
        </BuyingSellingDiv>
    )
}

export default Button