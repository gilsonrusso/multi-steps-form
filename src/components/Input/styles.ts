import { styled } from "styled-components";

export const Label = styled.label`
  font-size: 0.8125rem;
`;
export const Input = styled.input`
  display: block;
  margin-top: 7px;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 10px;
  border: 2px solid #25cd89;
  border-radius: 10px;
  color: #ffffff;
  outline: 0;
  font-size: 15px;
  background-color: #02044a;
  
  :focus {
    box-shadow: none;
  }
`;
