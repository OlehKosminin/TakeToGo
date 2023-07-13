import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  @media screen and (min-width: ${(props) => props.theme.baseSettings.pc}px) {
    margin-right: 0;

    display: flex;
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
    margin-left: 2vh;
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

  padding: 0 10px 9px 10px;

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

    font-size: ${(props) => props.theme.sideBar.fontSizeTitlePc};
  }
`;

export const Icon = styled(BsFillTelephoneFill)`
  width: 21px;
  height: 21px;

  margin-right: 15px;

  color: ${(props) => props.theme.sideBar.contactIconColor};
`;

export const Wrapper = styled.div`
  color: inherit;
  margin-right: auto;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.sideBar.blackColor};
  color: inherit;
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
