import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

import responsiveFont from "../../mixins/responsiveFont";

export const List = styled.ul`
  @media screen and (min-width: ${(props) => props.theme.baseSettings.pc}px) {
    display: flex;

    margin-right: 13vh;
  }
`;

export const Link = styled(NavLink)`
  margin-bottom: 25px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${(props) => props.theme.sideBar.iconHover};
  }

  @media screen and (min-width: ${(props) => props.theme.baseSettings.pc}px) {
    margin-bottom: 0;
  }
`;

export const Item = styled.li`
  position: relative;

  cursor: pointer;

  font-size: ${(props) => props.theme.sideBar.fontSizeTitle};
  font-weight: 400;

  color: ${(props) => props.theme.sideBar.blackColor};

  display: flex;
  align-items: center;

  width: 100%;

  padding: 10px 10px 15px 10px;

  @media screen and (max-width: ${(props) => props.theme.baseSettings.pc}px) {
    ::before {
      content: "";

      position: absolute;

      bottom: 5px;

      opacity: 0.1;

      display: block;
      width: 100%;
      height: 0.5px;

      background-color: ${(props) => props.theme.sideBar.iconGreyColor};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.baseSettings.pc}px) {
    padding: 5px 10px 5px 10px;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.sideBar.blackColor};
  color: inherit;
  margin-right: auto;
  font-size: ${(props) => props.theme.sideBar.fontSizeTitle};

  transition: ${(props) => props.theme.sideBar.linkTransition};

  @media screen and (min-width: ${(props) => props.theme.baseSettings.pc}px) {
    font-size: ${(props) => props.theme.sideBar.fontSizeTitlePc};
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.sideBar.iconGreyColor};
  font-size: ${(props) => props.theme.sideBar.fontSizeText};
  color: inherit;
`;

export const Arrow = styled(IoIosArrowForward)`
  position: absolute;

  color: ${(props) => props.theme.sideBar.iconGreyColor};

  width: 21px;
  height: 21px;
`;
