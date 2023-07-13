import React, { FunctionComponent } from "react";
import { Section, ShoppingBasket, MenuButton } from "./Header.styled";

import useScreenWidth from "../../hooks/useScreenWidth";

import Logo from "../../components/Logo/Logo";
import SideBar from "../SideBar/SideBar";
import ContactInfoBlock from "../../components/ContactInfoBlock/ContactInfoBlock";
import NavList from "../../components/NavList/NavList";

import { fakeApi } from "../../FakeAPI/data";
import { fakeBottomApi } from "../../FakeAPI/bottomMenuData";

export interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const screenWidth = useScreenWidth();

  return (
    <Section>
      <SideBar />
      <Logo>TakeToGo</Logo>
      {screenWidth >= 1200 && <ContactInfoBlock items={fakeApi} />}
      {screenWidth >= 1200 && <NavList items={fakeBottomApi} />}
      <MenuButton>
        <ShoppingBasket />
      </MenuButton>
    </Section>
  );
};

export default Header;
