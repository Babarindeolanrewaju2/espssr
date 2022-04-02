import { createGlobalStyle } from "styled-components";
import CircularStdBook from "./fonts/CircularStd-Book.woff";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'CircularStdBook';
  src: url(${CircularStdBook}) format('woff'),
       url(${CircularStdBook}) format('woff');
}
`;

export default FontStyles;
