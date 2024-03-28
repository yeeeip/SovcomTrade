import React from "react";
import styled from "styled-components";
import SC from './img/SC.png'
import IconPersone from './img/person.svg'

const NavbarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
    background-color: #F1F7FF;
`

const Pages = styled.div` 
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    font-weight: 500;
    font-weight: normal;
    border: 2px solid rgba(21, 25, 28, 0.25);
    border-radius: 20px;
`
const Page = styled.a`
    font-family: "TT Travels"; 
    color: #213A8B;
    border-radius: 20px;
    padding: 7px 20px;
    text-decoration: none;
    &:hover{
        color: white;
        background: #213A8B;
    }
`

const UserName = styled.div`
    display: flex;
    align-items: center;
    &img{
        width: 40px;
        height: 40px;
    }
    &a{
    
        font-family: "TT Travels"; 
        text-decoration: none;
        color: #213A8B;
    }
`
const Name = styled.a`
    font-family: "TT Travels"; 
    text-decoration: none;
    color: #213A8B;
    font-size: 16px;
`
const NameImg = styled.img`
    margin: 10px;
    width: 35px;
    height: 35px;
`


const Navbar = () => {
    return(
        <NavbarDiv>
            <div>
                <img src={SC}/>
            </div>
            <Pages>
                <Page href="/mainPage">Главная</Page>
                <Page href="#">Операции</Page>
                <Page href="#">Уведомления</Page>
            </Pages>
            <UserName>
                <Name href="#">Имя</Name>
                <NameImg src={IconPersone}/>
            </UserName>
        </NavbarDiv>
        
    )
}

export default Navbar