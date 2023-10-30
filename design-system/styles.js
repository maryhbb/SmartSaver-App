import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: ${poppins.style.fontFamily}; 
  }

  body {
    margin: 0;
    padding-top: 5%;
    font-weight: 400;
    padding-bottom: 30%;

    @media (min-width: 768px) {
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 5%;
    }
  }

  main {
    padding: 5px;
  } 
`;