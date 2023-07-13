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
  ${responsiveFontMixin};
  font-size: ${(props) => props.theme.headerFontSize};

  color: ${(props) => props.theme.btnColor};

  background-color: transparent;
  border: transparent;

  display: flex;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.baseSettings.pc}px) {
    margin-left: 26px;
    margin-top: 15px;
  }
`;

export const MenuButtonIconClose = styled(GrClose)`
  ${responsiveFontMixin};
`;

export const MenuButtonIconOpen = styled(GiHamburgerMenu)`
  ${responsiveFontMixin};
`;

export const Overlay = styled.div`
  position: fixed;
  /* z-index: 999; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(87, 86, 86, 0.6);
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

export const TryIt = styled.div`
  font-style: none;
  color: ${(props) => props.theme.sideBar.blackColor};

  font-size: ${(props) => props.theme.sideBar.fontSizeTitle};
`;
// menu pc

export const Wrapper = styled.div`
  position: fixed;
  top: 1.5em;
  left: 0;
  z-index: 11;
  width: 100px;
  height: 100vh;

  background-color: #fff;

  -webkit-box-shadow: 30px 36px 85px -30px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 30px 36px 85px -30px rgba(0, 0, 0, 0.64);
  box-shadow: 30px 36px 85px -30px rgba(0, 0, 0, 0.64);
`;
export const TextUnderButton = styled.div`
  position: fixed;
  top: 1.5em;
  left: 0;
  z-index: 11;
  width: 100px;
  height: 90px;

  background-color: #fff;

  -webkit-box-shadow: 30px 36px 85px -30px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 30px 36px 85px -30px rgba(0, 0, 0, 0.64);
  box-shadow: 30px 36px 85px -30px rgba(0, 0, 0, 0.64);

  padding-top: 15px;

  text-align: center;
`;
