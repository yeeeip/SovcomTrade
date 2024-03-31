import styled from "styled-components"
import SC from "../../Navbar/img/SC.png"
import tg from "../img/Vector.svg"
import vk from "../img/vk.svg"
import odnocl from "../img/odnoclassniki.svg"

const CallDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: start;
	justify-content: space-between;
	padding-top: 35px;
`
const CallDivLink = styled.a`
	font-family: "TT Travels";
	color: #213a8b;
	font-size: 34px;
	font-weight: 700;
`
const CustomLinkContainer = styled.div`
	display: flex;
	gap: 0 10px;
   justify-content:end;
   align-items: center;
   margin: 50px 0;
`
const Call = ({ title }) => {
	return (
		<CallDiv>
			<img style={{ width: "50px", height: "27px" }} src={SC} />
			<div>
				<CallDivLink href='#'>{title}</CallDivLink>
				<CustomLinkContainer>
                  <img src={tg} alt="" style={{width:'26px',height:'26px', cursor:'pointer'}} />
                  <img src={vk} alt="" style={{width:'26px',height:'26px', cursor:'pointer'}} />
                  <img src={odnocl} alt="" style={{width:'26px',height:'26px', cursor:'pointer'}} />
				</CustomLinkContainer>
			</div>
		</CallDiv>
	)
}

export default Call
