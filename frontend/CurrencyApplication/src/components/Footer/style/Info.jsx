import styled from "styled-components"

const InfoDiv = styled.div`
   padding:24px 0 60px 0;
	width: 100%;
`
const InfoOneDiv = styled.div`
	padding-top: 30px;
	display: flex;
	justify-content: space-between;
`
const InfoTwoDiv = styled.div`
	display: flex;
	justify-content: space-between;
`
const InfoOneA = styled.a`
	font-family: "TT Travels";
	color: #213a8b;
	font-size: 19px;
	text-decoration: none;
`
const InfoTwoA = styled.a`
	font-family: "TT Travels";
	color: #1d1f24;
	font-size: 14px;
	margin-right: 20px;
`
const Line = styled.div`
	height: 17px;
	width: 1px;
	margin: 0 20px;
	background: #1d1f24;
`

const Info = ({ title }) => {
	return (
		<InfoDiv>
			<InfoOneDiv>
				<InfoTwoDiv>
					<InfoOneA href='#'>Открыть счет</InfoOneA>
					<Line></Line>
					<InfoOneA href='#'>Заявка на продажу</InfoOneA>
					<Line></Line>
					<InfoOneA href='#'>Заявка на покупку</InfoOneA>
				</InfoTwoDiv>
				<InfoTwoDiv>
					<InfoOneA href='#'>Операции</InfoOneA>
					<Line></Line>
					<InfoOneA href='#'>Уведомления</InfoOneA>
					<Line></Line>
					<InfoOneA href='#'>Личный кабинет</InfoOneA>
				</InfoTwoDiv>
			</InfoOneDiv>
			<InfoOneDiv>
				<InfoTwoDiv>
					<InfoTwoA href='#'>Privacy Policy</InfoTwoA>
					<InfoTwoA href='#'>Terms & Conditions</InfoTwoA>
				</InfoTwoDiv>
				<InfoTwoDiv>
					<InfoTwoA href='#'>© 2004-2024, ПАО «Совкомбанк» Все права защищены</InfoTwoA>
				</InfoTwoDiv>
			</InfoOneDiv>
		</InfoDiv>
	)
}

export default Info
