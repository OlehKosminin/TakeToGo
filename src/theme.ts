interface IType {
  headerType: "big" | "small";
}

interface IFontSize {
  from: string;
  to: string;
}

interface IAdaptiveValue {
  min: string;
  max: string;
}

interface IPlan {
  textColor: string;
  font?: string;
  fontSize: IFontSize;
  adaptiveValue?: IAdaptiveValue;
}

interface IMedia {
  mobile: string;
  tablet: string;
  tabletToPc: string;
  laptop: string;
}

interface ILogo {
  fontSizeMobile: string;
  fontSizeTablet: string;
  fontSizePc: string;
}

interface IHeader {
  titleFontSize: string;
  textFontSize: string;
  headerFontSize: string;
  fontSizePc: string;
}

interface IBaseSettings {
  type: IType;
  baseColor: string;
  secondColor: string;
  hoverColor: string;
  warningColor: string;
  baseFonts: string;
  pc: string;
  tablet: string;
  mobile: string;
  containerWidth: string;
}

interface ITheme {
  baseSettings: IBaseSettings;
  hero: {
    title: IPlan;
    subTitle: IPlan;
    description: IPlan;
  };
  burgerMenu: {
    bgColor: string;
  };
  media: IMedia;
  logo: ILogo;
  header: IHeader;
}

const theme: ITheme = {
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
  hero: {
    title: {
      textColor: "#ffffff",
      font: "Nunito",
      fontSize: {
        from: "90",
        to: "160",
      },
      adaptiveValue: {
        min: "20",
        max: "40",
      },
    },
    subTitle: {
      textColor: "#ffffff",
      fontSize: {
        from: "30",
        to: "80",
      },
      adaptiveValue: {
        min: "15",
        max: "30",
      },
    },
    description: {
      textColor: "#ffffff",
      fontSize: {
        from: "15",
        to: "40",
      },
      adaptiveValue: {
        min: "400",
        max: "500",
      },
    },
  },
  burgerMenu: {
    bgColor: "#231F20",
  },
  media: {
    mobile: "screen and (max-width: 319px)",
    tablet: "screen and (min-width: 320px) and (max-width: 767px) ",
    tabletToPc: "screen and (min-width: 768px) and (max-width: 1199px)",
    laptop: "screen and (min-width: 1200px)",
  },
  logo: {
    fontSizeMobile: "30",
    fontSizeTablet: "30",
    fontSizePc: "37",
  },
  header: {
    titleFontSize: "500",
    textFontSize: "400",

    headerFontSize: "3vw",
    fontSizePc: "60",
  },
};
export default theme;
