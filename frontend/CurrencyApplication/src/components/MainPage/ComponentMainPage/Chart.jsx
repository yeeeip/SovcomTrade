import styled from "styled-components"
import { useState } from "react"
import { ChartDirhams } from "../style/Charts/ChartDirhams"
import { ChartYuan } from "../style/Charts/ChartYuan"
const ChartDiv = styled.div`
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
const ChartTitle = styled.span`
  margin-top: 45px;
  margin-right: 10px;
  font-family: TT Travels;
  font-size: 16px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
`




export const Chart = () => {
    const [isActive, setActive] = useState(false)
    const  handleButtonOption = () => {
		isActive === true ? setActive(false) : setActive(true)
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
                        <ChartTitle>Курсы по отношению к рублю</ChartTitle>
                    </ButtonTitleDiv>
                    <ChartDirhams/>
                </>
            )}
            {!isActive && (
                <>
                    <ButtonTitleDiv>
                        <ButtonDiv>
                            <ButtonDirhams href="#" onClick={handleButtonOption}>Дирхам</ButtonDirhams>
                            <ButtonYuan href="#" onClick={handleButtonOption}>Юань</ButtonYuan>
                        </ButtonDiv>
                        <ChartTitle>Курсы по отношению к рублю</ChartTitle>
                    </ButtonTitleDiv>
                    <ChartYuan/>
                    
                </> 
            )}
            
        </ChartDiv>
    )
}