import styled from "styled-components"

const CustomButton = styled.a`
    width: 100%;
    border-radius: 40px;
    background: #DA5155;
    padding:24px;
    text-align:center;
    color:#FDFDFD;
    font-family:'TT Travels';
    font-weight:500;
    text-decoration:none;
    font-size:24px;
`


const ButtonOpen = ({title, href}) => {
    return(
            <CustomButton href={href}>{title}</CustomButton>
    )
}

export default ButtonOpen