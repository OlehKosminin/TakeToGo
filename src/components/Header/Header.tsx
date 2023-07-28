import React, { FunctionComponent } from "react";

import { Section, List, Item, Link, Number } from "./Header.styled";

import Logo from "../Logo/Logo";
import BurgerMenu from "../../modules/BurgerMenu/BurgerMenu";
import MenuList from "../MenuList/MenuList";

import { menuItem } from "../../FakeAPI/menuItem";

import useScreenWidth from "../../hooks/useScreenWidth";

export interface IHeaderProps {
  type: string;
}

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const screenWidth = useScreenWidth();

  return (
    <Section>
      <Logo margin="0 0 1em 0">TakeToGo</Logo>
      {screenWidth < 1199 && (
        <BurgerMenu>
          <MenuList items={menuItem} />
        </BurgerMenu>
      )}
      {screenWidth > 1199 && (
        <>
          <MenuList items={menuItem} />
          <Number>(063) 151 43 34</Number>
        </>
      )}
    </Section>
  );
};

export default Header;
