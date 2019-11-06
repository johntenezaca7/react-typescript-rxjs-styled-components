import styled from "styled-components";
import { device } from "../Breakpoints";

interface Grid_Container {
  flexDirection: string
  overFlowY: string;
}

const GridContainer = styled.div<Grid_Container>`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 2rem;
  position: relative;
  overflow-y: ${props => props.overFlowY};
  
  @media ${device.tablet} {

  }

  @media ${device.desktop} {

  }
`;

export { GridContainer };