import { createGlobalStyle } from "styled-components";
import fontMontserratBoldTtf from "./assets/Montserrat-Bold.ttf";
import fontMontserratBoldWoff from "./assets/Montserrat-Bold.woff";
import fontMontserratBoldWoff2 from "./assets/Montserrat-Bold.woff2";

import fontMontserratBoldItalicTtf from "./assets/Montserrat-BoldItalic.ttf";
import fontMontserratBoldItalicWoff from "./assets/Montserrat-BoldItalic.woff";
import fontMontserratBoldItalicWoff2 from "./assets/Montserrat-BoldItalic.woff2";

import fontMontserratRegularTtf from "./assets/Montserrat-Regular.ttf";
import fontMontserratRegularWoff from "./assets/Montserrat-Regular.woff";
import fontMontserratRegularWoff2 from "./assets/Montserrat-Regular.woff2";

import fontMontserratItalicTtf from "./assets/Montserrat-Italic.ttf";
import fontMontserratItalicWoff from "./assets/Montserrat-Italic.woff";
import fontMontserratItalicWoff2 from "./assets/Montserrat-Italic.woff2";

import fontOswaldRegularTtf from "./assets/Oswald-Regular.ttf";
import fontOswaldRegularWoff from "./assets/Oswald-Regular.woff";
import fontOswaldRegularWoff2 from "./assets/Oswald-Regular.woff2";

import fontOswaldSemiBoldTtf from "./assets/Oswald-SemiBold.ttf";
import fontOswaldSemiBoldWoff from "./assets/Oswald-SemiBold.woff";
import fontOswaldSemiBoldWoff2 from "./assets/Oswald-SemiBold.woff2";

const fonts = [
  {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontStyle: "normal",
    woff2: fontMontserratRegularWoff2,
    woff: fontMontserratRegularWoff,
    ttf: fontMontserratRegularTtf,
  },
  {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontStyle: "italic",
    woff2: fontMontserratItalicWoff2,
    woff: fontMontserratItalicWoff,
    ttf: fontMontserratItalicTtf,
  },
  {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontStyle: "normal",
    woff2: fontMontserratBoldWoff2,
    woff: fontMontserratBoldWoff,
    ttf: fontMontserratBoldTtf,
  },
  {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontStyle: "italic",
    woff2: fontMontserratBoldItalicWoff2,
    woff: fontMontserratBoldItalicWoff,
    ttf: fontMontserratBoldItalicTtf,
  },

  {
    fontFamily: "Oswald",
    fontWeight: 400,
    fontStyle: "normal",
    woff2: fontOswaldRegularWoff2,
    woff: fontOswaldRegularWoff,
    ttf: fontOswaldRegularTtf,
  },
  {
    fontFamily: "Oswald",
    fontWeight: 600,
    fontStyle: "normal",
    woff2: fontOswaldSemiBoldWoff2,
    woff: fontOswaldSemiBoldWoff,
    ttf: fontOswaldSemiBoldTtf,
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
