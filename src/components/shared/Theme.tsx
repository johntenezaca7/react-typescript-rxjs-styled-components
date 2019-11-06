import React from "react";
import { ThemeProvider } from "styled-components";

export interface ThemeInterface {
  fg: string;
  primaryLight: string;
  primaryBase: string;
  primaryDark: string;
}

const theme: ThemeInterface = {
  fg: "palevioletred",
  primaryLight: "#8dc6ff",
  primaryBase: "#0064c8",
  primaryDark: "#003366"
};

const ThemeWrapper = (props:any):JSX.Element => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);

export { ThemeWrapper };