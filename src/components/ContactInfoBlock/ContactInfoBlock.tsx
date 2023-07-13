import React, { FunctionComponent } from "react";
import {
  Item,
  List,
  Wrapper,
  Title,
  Text,
  Link,
} from "./ContactInfoBlock.styled";
import { IIcon } from "../../Interface/Interface";
import Icons from "../../modules/SideBar/Icons/Icons";

import useScreenWidth from "../../hooks/useScreenWidth";

export interface IContactInfoBlockProps {
  items: IIcon[];
}

const ContactInfoBlock: FunctionComponent<IContactInfoBlockProps> = (props) => {
  const screenWidth = useScreenWidth();

  if (screenWidth >= 1200) {
    return (
      <List>
        {props.items.map((item) => (
          <Link to={item.to} key={item._id}>
            <Item key={item.position}>
              <Icons icon={item.icon} />
              <Wrapper>
                <Title>{item.title}</Title>
              </Wrapper>
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
            <Wrapper>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </Wrapper>
            <Icons icon="arrow" />
          </Item>
        </Link>
      ))}
    </List>
  );
};

export default ContactInfoBlock;
