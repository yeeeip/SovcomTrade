import styled from "styled-components"
import Call from "./style/Call"
import Info from "./style/Info"

const FooterDiv = styled.div`
`

const Footer = () => {
    return(
        <FooterDiv>
            <Call title={" +8 (800) 100-00-06"}/>
            <Info/>
        </FooterDiv>
    )
} 

export default Footer