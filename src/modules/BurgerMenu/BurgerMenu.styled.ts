import styled from "styled-components";
import responsiveFont from "../../mixins/responsiveFont";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const responsiveFontMixin = (props: any) =>
  responsiveFont({
    minWidth: props.theme.baseSettings.mobile,
    maxWidth: props.theme.baseSettings.tablet,
    minFontSize: props.theme.header.fontSizeBaseTextHeaderMin,
    maxFontSize: props.theme.header.fontSizeBaseTextHeaderMax,
  });

export const Menu = styled.div`
  ${responsiveFontMixin};
  font-size: ${(props) => props.theme.header.headerFontSize};
  position: absolute;
`;

export const MenuButton = styled.button`
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

  background-color: transparent;
  border: transparent;

  display: flex;
  align-items: center;
`;

export const MenuButtonIconClose = styled(GrClose)`
  ${responsiveFontMixin};
`;

export const MenuButtonIconOpen = styled(GiHamburgerMenu)`
  ${responsiveFontMixin};
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(87, 86, 86, 0.6);
  /* background-color: tomato; */
`;

export const SideBarMenu = styled.div`
  ${responsiveFontMixin};

  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 275px;
  background-color: #fafafa;
  right: 100%;
  transition-duration: 0.5s;
  z-index: 21;
  overflow-y: auto;
  padding: 10px 0;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: fit-content;
  height: 100vh;

  background-color: ${(props) => props.theme.burgerMenu.bgColor};

  padding: 20px 40px;
  /* opacity: 0.9; */

  -webkit-box-shadow: 30px 36px 85px -30px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 30px 36px 85px -30px rgba(0, 0, 0, 0.64);
  box-shadow: 30px 36px 85px -30px rgba(0, 0, 0, 0.64);
`;
