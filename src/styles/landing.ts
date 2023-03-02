import styled from "styled-components";

export const Sections = styled.div`
  display: flex;
  flex:1;
  flex-direction:column;
  box-sizing: border-box;
  align-items:center;
  padding-top:50vh;
  background:black;
  width:100%;
  min-height:100%;
  
  :hover{
    box-shadow: inset 0 0 75px #11002c;
    transition: ease-in-out 0.15s all;
  }
`;
