const baseSettings = {
  // orange
  baseColor: "#FF6633",
  // green
  secondColor: "rgb(0, 51, 51)",
  // base font
  baseFonts: "PFDinDisplayPro",
  //size wp
  pc: 1200,
  tablet: 768,
  mobile: 320,
  containerWidth: 1200,
};

const sideBar = {
  contactIconColor: baseSettings.baseColor,
  iconHover: "#339999",
  blackColor: "#003333",
  iconGreyColor: "#898989",
  // font size

  fontSizeTitle: "16px",
  fontSizeText: "12px",
  linkTransition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1);",
  //
  fontSizeTitlePc: "26px",
};

const shoppingBasket = {
  fontSizePc: "60px",
};

const theme = {
  shoppingBasket,
  baseSettings,
  header: {
    baseFonts: baseSettings.baseFonts,
    titleFontSize: 500,
    textFontSize: 400,
    //
    fontSizeBaseTextHeaderMin: 25,
    fontSizeBaseTextHeaderMax: 35,
    //
    headerFontSize: "3vw",
    //green
    accentSecondColor: baseSettings.secondColor,
    // orange
    accentColor: baseSettings.baseColor,
    //
    hoverTextColor: "rgb(0, 0, 0)",
    textWhiteColor: "rgb(255, 255, 255)",
    btnColor: "rgb(0, 0, 0)",
    //
    fontSizePc: "60px",
    fontSizePcNum: 60,
  },
  sideBar,
};
export default theme;
