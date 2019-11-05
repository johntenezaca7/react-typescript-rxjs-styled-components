import styled from "styled-components";
import { device } from "./Breakpoints";

const UserFlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  
  @media ${device.tablet} {

  }

  @media ${device.desktop} {

  }
`;

const UserBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100%);
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  border: 1px solid black;
  transition: box-shadow 0.2s;
  cursor: pointer;

  @media ${device.tablet} {
    width: calc(100% / 3 - 3rem);
    margin-right: 3rem;
    margin-left: 3rem;
    margin-bottom: 3rem;
  }

  @media ${device.desktop} {
    width: calc(100% / 4 - 4rem);
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
`;
export { UserFlexContainer, UserBoxContainer };