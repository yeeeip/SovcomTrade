import React from "react"
import styled from "styled-components"

const PageLink = styled.a`
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
export  const Page = ()=> {
    return (
            <PageLink></PageLink>
	)
}