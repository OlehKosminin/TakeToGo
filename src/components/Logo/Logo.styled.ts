import styled from "styled-components";
import responsiveFont from "../../mixins/responsiveFont";

export const LogoContainer = styled.div`
  ${(props) =>
    responsiveFont({
      minWidth: props.theme.baseSettings.mobile,
      maxWidth: props.theme.baseSettings.pc,
      minFontSize: props.theme.logo.fontSizeMobile,
      maxFontSize: props.theme.logo.fontSizePc,
    })};
  font-size: ${(props) => props.theme.headerFontSize};

  font-family: ${(props) => props.theme.baseSettings.baseFonts};

  color: ${(props) => props.theme.baseSettings.secondColor};

  @media ${(props) => props.theme.media.tabletToPc} {
    margin: 0 auto;
  }

  @media ${(props) => props.theme.media.laptop} {
    margin: 0;
  }
`;
