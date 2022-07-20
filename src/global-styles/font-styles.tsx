import { createGlobalStyle } from "styled-components";
const fontMontserratBoldTtf = require("./assets/Montserrat-Bold.ttf");
const fontMontserratBoldWoff = require("./assets/Montserrat-Bold.woff");
const fontMontserratBoldWoff2 = require("./assets/Montserrat-Bold.woff2");

const fontMontserratBoldItalicTtf = require("./assets/Montserrat-BoldItalic.ttf");
const fontMontserratBoldItalicWoff = require("./assets/Montserrat-BoldItalic.woff");
const fontMontserratBoldItalicWoff2 = require("./assets/Montserrat-BoldItalic.woff2");

const fontMontserratRegularTtf = require("./assets/Montserrat-Regular.ttf");
const fontMontserratRegularWoff = require("./assets/Montserrat-Regular.woff");
const fontMontserratRegularWoff2 = require("./assets/Montserrat-Regular.woff2");

const fontMontserratItalicTtf = require("./assets/Montserrat-Italic.ttf");
const fontMontserratItalicWoff = require("./assets/Montserrat-Italic.woff");
const fontMontserratItalicWoff2 = require("./assets/Montserrat-Italic.woff2");

const fontOswaldRegularTtf = require("./assets/Oswald-Regular.ttf");
const fontOswaldRegularWoff = require("./assets/Oswald-Regular.woff");
const fontOswaldRegularWoff2 = require("./assets/Oswald-Regular.woff2");

const fontOswaldSemiBoldTtf = require("./assets/Oswald-SemiBold.ttf");
const fontOswaldSemiBoldWoff = require("./assets/Oswald-SemiBold.woff");
const fontOswaldSemiBoldWoff2 = require("./assets/Oswald-SemiBold.woff2");

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
