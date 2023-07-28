import React, { FunctionComponent, ReactNode } from "react";
import { List, Item, Link } from "./MenuList.styled";
import { IMenuItem } from "../../Interface/Interface";

export interface IMenuListProps {
  items: IMenuItem[];
}

const MenuList: FunctionComponent<IMenuListProps> = ({ items }) => {
  return (
    <List>
      {items.map(({ _id, to, position, text }) => (
        <Link to={to} key={_id}>
          <Item>{text}</Item>
        </Link>
      ))}
    </List>
  );
};

export default MenuList;
