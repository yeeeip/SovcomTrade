import styled from "styled-components"
import { useState } from "react"
import { ChartDirhams } from "../style/Charts/ChartDirhams"
import { ChartYuan } from "../style/Charts/ChartYuan"

const ChartDiv = styled.div`
    width: 100%;
`
const ButtonDiv = styled.div`
    display: flex;
`
const ButtonDirhamsActive = styled.a`
    font-family: TT Travels;
    font-size: 24px;
    font-weight: 400;
    line-height: 20.64px;
    text-align: left;
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 20px 24px 20px 24px;
    margin-bottom: 0px;
    border-radius: 16px 16px 0px 16px;
    background: #213A8B;
    color: white;
`
const ButtonDirhams = styled.a`
    font-family: TT Travels;
    font-size: 16px;
    font-weight: 400;
    line-height: 13.76px;
    text-align: left;
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px 10px 20px;
    margin-top: 16px;
    border-radius: 16px 16px 0px 16px;
    border: 2px solid #213A8B;
    color: #213A8B;
`
const ButtonYuanActive = styled.a`
  font-family: TT Travels;
  font-size: 16px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 10px 20px;
  margin-top: 16px;
  border-radius: 16px 16px 16px 0px;
  border: 2px solid #213A8B;
  color: #213A8B;
`
const ButtonYuan = styled.a`
    font-family: TT Travels;
    font-size: 24px;
    font-weight: 400;
    line-height: 20.64px;
    text-align: left;
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 20px 24px 20px 24px;
    margin-bottom: 0px;
    border-radius: 16px 16px 16px 0px;
    background: #213A8B;
    color: white;
`
const ButtonTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const CustomSelect = styled.div`
	position: relative;
`
const CustomValue = styled.div`
	font-family: "TT Travels";
	font-size: 24px;
	color: #213a8b;
	font-weight: 500;
	cursor: pointer;
	user-select: none;
	display: flex;
	gap: 0 10px;
	align-items: center;
	@media (max-width: 1400px) {
		font-size: 17px;
		font-weight: 550;
	}
`
const CustomList = styled.div`
	display: ${(props) => (props.isselecting ? "flex" : "none")};
	flex-direction: column;
	padding: 0 16px;
	border: 1px solid #213a8b99;
	background: #fdfdfd;
	border-radius: 16px;
	position: absolute;
	width: ${(props) => props.width + "px"};
	top: 30px; /* position the top  edge of the element at the middle of the parent */
	right: 0;
	height: fit-content;
	& > *:not(:last-child) {
		border-bottom: 2px solid #1d1f241a;
	}
`
const CustomOption = styled.div`
	font-family: "TT Travels";
	font-size: 16px;
	color: #213a8b;
	padding: 16px 0;
	text-align: center;
	cursor: pointer;
	user-select: none;
`
const CustomArrow = styled.div`
	width: 12px;
	height: 18px;
	position: relative;
	& > * {
		position: absolute;
		left: 0;
		background: #213a8b99;
		width: 14px;
		height: 2px;
	}
	& > *:nth-child(1) {
		top: 17%;
		transform: rotate(45deg);
	}
	& > *:nth-child(2) {
		bottom: 17%;
		transform: rotate(-45deg);
	}
	@media (max-width: 1400px) {
		height: 12px;
		& > * {
			width: 10px;
		}
	}
`






export const Chart = () => {
    const [isActive, setActive] = useState(false);
    const [interval, setInterval] = useState(9);
    const [key, setKey] = useState(0);
    const data = ["Текущая неделя", "Текущий месяц", "3 месяца", "За весь год"];
    let [isSelecting, setIsSelecting] = useState(false)
	let [currentValue, setCurrentValue] = useState("Текущая неделя")
    const reloadChartDirhams = () => {
        setKey(prevKey => prevKey + 1);
    };    
	const handleOpenButton = () => {
		setIsSelecting(!isSelecting)
	}
	const handleSelect = (e) => {
		setIsSelecting(!isSelecting)
		setCurrentValue(e.target.textContent)
        if(e.target.textContent === "Текущая неделя") {
            setInterval(9);
        } else if(e.target.textContent === "Текущий месяц") {
            setInterval(33);
        } else if(e.target.textContent === "3 месяца") {
            setInterval(90);
        } else if(e.target.textContent === "За весь год") {
            setInterval(182);
        }
        reloadChartDirhams();
	}

    const  handleButtonOption = () => {
		setActive(!isActive);
    };
    return(
        <ChartDiv>
            {isActive && (
                <>  
                    <ButtonTitleDiv>
                        <ButtonDiv>
                            <ButtonDirhamsActive href="#" onClick={handleButtonOption}>Дирхам</ButtonDirhamsActive>
                            <ButtonYuanActive href="#" onClick={handleButtonOption}>Юань</ButtonYuanActive>
                        </ButtonDiv>
                        <CustomSelect>
                            <CustomValue onClick={handleOpenButton}>
                                <CustomArrow style={{ transform: "rotate(180deg)" }}>
                                    <span></span>
                                    <span></span>
                                </CustomArrow>
                                {currentValue}
                                <CustomArrow>
                                    <span></span>
                                    <span></span>
                                </CustomArrow>
                            </CustomValue>
                            <CustomList isselecting={isSelecting} width={170}>
                                {data.map((item, index) => {
                                    return (
                                        <CustomOption  onClick={handleSelect}>
                                            {item}
                                        </CustomOption>
                                    )
                                })}
                            </CustomList>
                        </CustomSelect>
                    </ButtonTitleDiv>
                    <ChartDirhams interval={interval} key={key}/>
                    
                </>
            )}
            {!isActive && (
                <>
                    <ButtonTitleDiv>
                        <ButtonDiv>
                            <ButtonDirhams href="#" onClick={handleButtonOption}>Дирхам</ButtonDirhams>
                            <ButtonYuan href="#" onClick={handleButtonOption}>Юань</ButtonYuan>
                        </ButtonDiv>
                        
                        <CustomSelect>
                            <CustomValue onClick={handleOpenButton}>
                                <CustomArrow style={{ transform: "rotate(180deg)" }}>
                                    <span></span>
                                    <span></span>
                                </CustomArrow>
                                {currentValue}
                                <CustomArrow>
                                    <span></span>
                                    <span></span>
                                </CustomArrow>
                            </CustomValue>
                            <CustomList isselecting={isSelecting} width={170}>
                                {data.map((item, index) => {
                                    return (
                                        <CustomOption  onClick={handleSelect}>
                                            {item}
                                        </CustomOption>
                                    )
                                })}
                            </CustomList>
                        </CustomSelect>
                    </ButtonTitleDiv>
                    <ChartYuan interval={interval} key={key}/>
                </> 
            )}
            
        </ChartDiv>
    )
}