import styled from "styled-components";
import { device } from "../Breakpoints";
import { ThemeInterface } from "../Theme";

interface Grid_Item_Container {
  flexDirection: string,
  theme: ThemeInterface
}

const GridItemContainer = styled.div<Grid_Item_Container>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  justify-content: center;
  width: calc(100%);
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  border: 1px solid black;
  box-shadow: 6px 6px ${props => props.theme.primaryLight};
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 8px 8px ${props => props.theme.primaryLight};
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%
    color: black;
    text-decoration: none;
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