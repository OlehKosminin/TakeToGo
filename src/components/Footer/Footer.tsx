import React, { FunctionComponent, ReactNode } from "react";

import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";

import { FooterContainer } from "./Footer.styled";
import { menuItem } from "../../FakeAPI/menuItem";

interface IFooterProps {
  // children: ReactNode;
}

const Footer: FunctionComponent<IFooterProps> = () => {
  return (
    <FooterContainer>
      <Logo>TakeToGo</Logo>
      <MenuList items={menuItem} />
    </FooterContainer>
  );
};

export default Footer;
