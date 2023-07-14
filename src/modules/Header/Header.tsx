import React, { FunctionComponent, useState } from "react";
import { Section } from "./Header.styled";

import useScreenWidth from "../../hooks/useScreenWidth";

import Logo from "../../components/Logo/Logo";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

export interface IHeaderProps {
  type: string;
}

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const [type] = useState(props.type);
  const screenWidth = useScreenWidth();
  return (
    <Section>
      <Logo margin="0 0 1em 0">TakeToGo</Logo>
      <BurgerMenu></BurgerMenu>
    </Section>
  );
};

export default Header;
