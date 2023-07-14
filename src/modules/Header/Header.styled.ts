import styled from "styled-components";

import responsiveFont from "../../mixins/responsiveFont";

const responsiveFontMixin = (props: any) =>
  responsiveFont({
    minWidth: props.theme.baseSettings.mobile,
    maxWidth: props.theme.baseSettings.tablet,
    minFontSize: props.theme.header.fontSizeBaseTextHeaderMin,
    maxFontSize: props.theme.header.fontSizeBaseTextHeaderMax,
  });

export const Section = styled.header`
  ${responsiveFontMixin};

  position: relative;
  display: flex;
  margin-top: 0.5vw;

  align-items: center;
`;
