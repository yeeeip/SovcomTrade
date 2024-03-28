import styled from "styled-components"

const BuyingSellingDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    border: 2px solid #213A8B;
    border-radius: 40px;
    margin-bottom: 20px;
    background: white;
`
const BuyingSellingA = styled.a`
    color: #213A8B;
    display: flex;
    text-decoration: none;
    font-family: "TT Travels";
    padding: 27px 80px;
    font-size: 21px;
`

const BuyingSelling = ({title, href}) => {
    return(
        <BuyingSellingDiv>
            <BuyingSellingA href={href}>{title}</BuyingSellingA>
        </BuyingSellingDiv>
    )
}

export default BuyingSelling