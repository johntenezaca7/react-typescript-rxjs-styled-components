import styled from "styled-components";
import { device } from "../Breakpoints";

interface Grid_Item_Container {
  flexDirection: string
}

const GridItemContainer = styled.div<Grid_Item_Container>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  width: calc(100%);
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  border: 1px solid black;
  box-shadow: 6px 6px orange;
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 8px 8px orange;
  }

  h4 {
    margin: 1rem 0;
  }

  p {
    margin: 0;
    &:last-of-type {
      margin-bottom: 1rem;
    }
  }

  svg {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  @media ${device.tablet} {
    width: calc(100% / 2.5 - 2.5rem);
    margin-right: 3.5rem;
    margin-left: 3.5rem;
    margin-bottom: 5.5rem;
  }

  @media ${device.desktop} {
    width: calc(100% / 2.5 - 2.5rem);
    margin-right: 3.5rem;
    margin-left: 3.5rem;
    margin-bottom: 5.5rem;
  }
`;

export { GridItemContainer };