import React, { FunctionComponent } from "react";

import useScreenWidth from "../../hooks/useScreenWidth";

import Icons from "../../modules/SideBar/Icons/Icons";
import { ISideBarBottom } from "../../Interface/Interface";
import { List, Link, Item, Title } from "./NavList.styled";

export interface INavItemProps {
  items: ISideBarBottom[];
}

const NavItem: FunctionComponent<INavItemProps> = (props) => {
  const screenWidth = useScreenWidth();

  if (screenWidth >= 1200) {
    return (
      <List>
        {props.items.map((item) => (
          <Link to={item.to} key={item._id}>
            <Item key={item.position}>
              {screenWidth > 1400 && <Icons icon={item.icon} />}
              <Title>{item.title}</Title>
            </Item>
          </Link>
        ))}
      </List>
    );
  }

  return (
    <List>
      {props.items.map((item) => (
        <Link to={item.to} key={item._id}>
          <Item key={item.position}>
            <Icons icon={item.icon} />
            <Title>{item.title}</Title>
            <Icons icon="arrow" />
          </Item>
        </Link>
      ))}
    </List>
  );
};

export default NavItem;
