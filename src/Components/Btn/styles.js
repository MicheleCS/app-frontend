import styled from "styled-components";

export const BtnCustomizado = styled.button`
color: #FFF;
font-size: 20px;
background-color: #6a6a6a;
border: 30px;
border-radius: 8px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 16px 20px;
width: 50%;
cursor: pointer;

  ${props => props.disabled === false &&`
    &:hover {
      background-color: #FFF;
      color: #6a6a6a;
    }
  `}
  ${props => props.disabled === false &&`
    opacity: 0.7
  `}
`