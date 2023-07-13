import styled from "styled-components";
import { BsBasket } from "react-icons/bs";

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

  @media screen and (min-width: ${(props) => props.theme.baseSettings.pc}px) {
    font-size: ${(props) => props.theme.sideBar.fontSizeTitlePc};

    margin-top: 10px;

    align-items: center;

    justify-content: space-between;
  }
`;

export const ShoppingBasket = styled(BsBasket)`
  ${(props: any) =>
    responsiveFont({
      minWidth: props.theme.baseSettings.mobile,
      maxWidth: props.theme.baseSettings.tablet,
      minFontSize: props.theme.header.fontSizeBaseTextHeaderMin,
      maxFontSize: props.theme.header.fontSizePcNum,
    })}

  color: ${(props) => props.theme.header.textWhiteColor};
  /* font-size: ${(props) => props.theme.header.headerFontSize}; */
  padding: 0.15em;
  @media screen and (min-width: ${(props) => props.theme.baseSettings.pc}px) {
    font-size: ${(props) => props.theme.shoppingBasket.fontSizePc};
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  right: -0.3px;

  border-top-left-radius: 0.3em;
  border-bottom-left-radius: 0.3em;

  border: 1px solid ${(props) => props.theme.header.accentColor};
  background-color: ${(props) => props.theme.header.accentColor};
`;
