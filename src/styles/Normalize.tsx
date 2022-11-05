import { Global, css } from "@emotion/react";

const normalize = css`
  * {
    margin: 0;
    padding: 0;
    box-spacing: border-box;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Normalize = () => {
  return <Global styles={normalize} />;
};
