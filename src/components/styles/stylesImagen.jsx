import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardImagen = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 20rem;
    height: 20rem;
    box-shadow: 0 0 .5rem;
    :hover{
        box-shadow: 0 0 1rem;
       
    }
`

export const WrapperImagen = styled.div`
    height: 100%;
    width: 20rem;
    
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    
`

export const WrapperDescription = styled.div`
    display: flex;
        
    flex-direction: column;
    position: absolute;
    bottom: 0;
    right: 0;
`
export const LabelDescription = styled.label`
    font-family: 'Times New Roman', Times, serif;
    color: #FFF;
    background-color: #2B5C4C;
    font-size: .8rem;
    
    
`
export const NumberDescription = styled.strong`
    
`
export const WrapperButton = styled.div`
    display: flex;
    justify-content: center;
    max-height: 2rem;
    position: absolute;

    
`
export const Button = styled(Link)`
    text-decoration: none;
    background-color: #2B5C4C;
    font-size: 1rem;
    padding: .6rem;
    color: #FFF;
`