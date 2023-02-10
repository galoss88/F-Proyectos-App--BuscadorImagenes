import styled from "styled-components";

export const Message = styled.p`
    margin: 1rem auto;
    color: white;
    padding: .5rem 1rem;
    border-radius: 5px;    
    background-color: #953316;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    ::before{
        content: "* ";
    }
`