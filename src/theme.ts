const theme: any = {
  baseSettings: {
    type: {
      // headerType: "big" || "small",
      headerType: "small",
    },
    baseColor: "rgba(26,26,26,1)",
    secondColor: "#ffffff",
    hoverColor: "#FF6633",
    warningColor: "#ff4a4a",
    // base font
    baseFonts: "PFDinDisplayPro",
    //size wp
    pc: "1200",
    tablet: "768",
    mobile: "320",
    containerWidth: "1200",
  },
  media: {
    mobile: "screen and (max-width: 319px)",
    tablet: "screen and (min-width: 320px) and (max-width: 767px) ",
    tabletToPc: "screen and (min-width: 768px) and (max-width: 1199px)",
    laptop: "screen and (min-width: 1200px)",
  },
  logo: {
    fontSizeMobile: "25",
    fontSizeTablet: "30",
    fontSizePc: "40",
  },
  header: {
    titleFontSize: "500",
    textFontSize: "400",

    headerFontSize: "3vw",
    fontSizePc: "60",
  },
};
export default theme;
