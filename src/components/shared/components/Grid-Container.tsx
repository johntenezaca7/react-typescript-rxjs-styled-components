import styled from "styled-components";
import { device } from "../Breakpoints";

interface Grid_Container {
  flexDirection: string
  overFlowY: string;
  paddingTop: string;
}

const GridContainer = styled.div<Grid_Container>`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: ${props => props.paddingTop};
  position: relative;
  overflow-y: ${props => props.overFlowY};
  
  @media ${device.tablet} {

  }

  @media ${device.desktop} {

  }
`;

export { GridContainer };