import React, { FunctionComponent } from "react";
import { List, Item, Text, Link } from "./SmallMenu.styled";
import { ISmallMenuItem } from "../../Interface/Interface";
import Icons from "../../modules/SideBar/Icons/Icons";

export interface ISmallMenuProps {
  items: ISmallMenuItem[];
}

const SmallMenu: FunctionComponent<ISmallMenuProps> = ({ items }) => {
  return (
    <List>
      {items.map(({ position, key, icon, text, to, _id }) => (
        <Link to={to} key={_id}>
          <Item key={key}>
            <Icons icon={icon} />
            <Text>{text}</Text>
          </Item>
        </Link>
      ))}
    </List>
  );
};

export default SmallMenu;
