import React, { FunctionComponent } from "react";

import { Section, List, Item, Link, Number } from "./Header.styled";

import Logo from "../../components/Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { menuItem } from "../../FakeAPI/menuItem";

import useScreenWidth from "../../hooks/useScreenWidth";

export interface IHeaderProps {
  type: string;
}

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const screenWidth = useScreenWidth();

  const markup = menuItem.map(({ _id, to, position, text }) => {
    return (
      <Link to={to} key={_id}>
        <Item>{text}</Item>
      </Link>
    );
  });

  return (
    <Section>
      <Logo margin="0 0 1em 0">TakeToGo</Logo>
      {screenWidth < 1199 && (
        <BurgerMenu>
          <List>{markup} </List>
        </BurgerMenu>
      )}
      {screenWidth > 1199 && (
        <>
          <List>{markup} </List>
          <Number>(063) 151 43 34</Number>
        </>
      )}
    </Section>
  );
};

export default Header;
