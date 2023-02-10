import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 25%;
`;
export const WrapperSearch = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;

export const WrapperSubmit = styled.div`
  display: flex;
  height: 100%;
  width: 6rem;
`;

export const InputSearch = styled.input`
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: start;
  border: none;
  border-radius: 1rem;
  outline: none;
  font-family: Georgia, "Times New Roman", Times, serif, "Arial Narrow", Arial,
    sans-serif, Helvetica, sans-serif;
  font-size: 1rem;
  box-shadow: ${({error})=>error?"0 0 1rem red":null};
  :focus {
    box-shadow: 0 0 0.2rem orange;
    
  }
`;

export const InputSubmit = styled.input`
  display: flex;
  width: 100%;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  border: none;
  background-color: #af6a07;
  color: white;
  justify-content: center;
  :hover{
    background-color: orange;
    cursor: pointer;
  }
`;
