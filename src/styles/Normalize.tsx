import { Global, css } from "@emotion/react";
import { theme } from "./theme";

const normalize = css`
  * {
    margin: 0;
    padding: 0;
    box-spacing: border-box;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  body {
  }
  a {
    text-decoration: none;
    color: ${theme.color.red};
  }
  .Toastify__toast {
    border-radius: 1rem;
    border: 3px solid ${theme.color.black};
  }
  .Toastify__toast-theme--colored.Toastify__toast--error {
    background-color: ${theme.color.white};
    color: ${theme.color.red};
    font-weight: bold;
    text-align: center;
  }
  .Toastify__toast-theme--colored.Toastify__toast--success {
    background-color: ${theme.color.white};
    color: ${theme.color.green};
    font-weight: bold;
    text-align: center;
  }
`;

export const Normalize = () => {
  return <Global styles={normalize} />;
};
