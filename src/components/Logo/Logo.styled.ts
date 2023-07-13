import styled from "styled-components";
import responsiveFont from "../../mixins/responsiveFont";

export const LogoContainer = styled.div`
  ${(props) =>
    responsiveFont({
      minWidth: props.theme.baseSettings.mobile,
      maxWidth: props.theme.baseSettings.tablet,
      minFontSize: props.theme.header.fontSizeBaseTextHeaderMin,
      maxFontSize: props.theme.header.fontSizeBaseTextHeaderMax,
    })};
  font-size: ${(props) => props.theme.headerFontSize};

  font-family: var(--base-fonts);
  margin-left: 3em;

  @media screen and (min-width: ${(props) => props.theme.baseSettings.pc}px) {
    margin-left: 3.5em;
  }
`;
