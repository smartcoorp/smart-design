import { createGlobalStyle } from "styled-components";
import * as F from "./assets";

const fonts = [
  {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontStyle: "normal",
    woff2: F.fontMontserratRegularWoff2,
    woff: F.fontMontserratRegularWoff,
    ttf: F.fontMontserratRegularTtf,
  },
  {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontStyle: "italic",
    woff2: F.fontMontserratItalicWoff2,
    woff: F.fontMontserratItalicWoff,
    ttf: F.fontMontserratItalicTtf,
  },
  {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontStyle: "normal",
    woff2: F.fontMontserratBoldWoff2,
    woff: F.fontMontserratBoldWoff,
    ttf: F.fontMontserratBoldTtf,
  },
  {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontStyle: "italic",
    woff2: F.fontMontserratBoldItalicWoff2,
    woff: F.fontMontserratBoldItalicWoff,
    ttf: F.fontMontserratBoldItalicTtf,
  },

  {
    fontFamily: "Oswald",
    fontWeight: 400,
    fontStyle: "normal",
    woff2: F.fontOswaldRegularWoff2,
    woff: F.fontOswaldRegularWoff,
    ttf: F.fontOswaldRegularTtf,
  },
  {
    fontFamily: "Oswald",
    fontWeight: 600,
    fontStyle: "normal",
    woff2: F.fontOswaldSemiBoldWoff2,
    woff: F.fontOswaldSemiBoldWoff,
    ttf: F.fontOswaldSemiBoldTtf,
  },
];

const fontsString = fonts
  .map(({ fontFamily, fontWeight, fontStyle, woff, woff2, ttf }) => {
    return `
      @font-face {
        font-family: ${fontFamily};
        font-display: block;
        font-style: ${fontStyle};
        font-weight: ${fontWeight};
        src: url(${woff2}) format("woff2"),
        url(${woff}) format("woff"),
        url(${ttf}) format('truetype');

      }`;
  })
  .join("")
  .replace(/\n|^\s+/gm, "");

export const FontStyles = createGlobalStyle`
    ${fontsString}
`;
