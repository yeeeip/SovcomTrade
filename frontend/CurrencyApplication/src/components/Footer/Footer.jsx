import styled from "styled-components"
import Call from "./style/Call"
import Info from "./style/Info"

const FooterDiv = styled.div``

const Footer = () => {
	return (
		<FooterDiv>
			<div style={{ background: "white" }}>
				<div style={{ maxWidth: "1280px", margin: "0 auto" }}>
					<Call title={" +8 (800) 100-00-06"} />
				</div>
			</div>
         <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
			   <Info />
			</div>
		</FooterDiv>
	)
}

export default Footer
