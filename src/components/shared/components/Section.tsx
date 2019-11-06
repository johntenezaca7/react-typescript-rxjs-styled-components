import styled from "styled-components";

interface Section {
  flexDirection: string;
}

const Section = styled.section<Section>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  margin: 0 auto;
  height: 100vh;

  h1 {
    text-align: center;
  }
`;

export { Section }; 