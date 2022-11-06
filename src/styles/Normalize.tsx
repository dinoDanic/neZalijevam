import { Global, css } from "@emotion/react";
import { theme } from "./theme";

const normalize = css`
  * {
    margin: 0;
    padding: 0;
    box-spacing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  body {
    background-color: ${theme.color.green};
  }
  a {
    text-decoration: none;
    color: ${theme.color.red};
  }
`;

export const Normalize = () => {
  return <Global styles={normalize} />;
};
