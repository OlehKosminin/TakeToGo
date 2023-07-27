import React, { FunctionComponent, ReactNode } from "react";
import {
  Button,
  Info,
  InfoWrapper,
  Item,
  LinkSinglePage,
  List,
  Photo,
  Description,
} from "./BaseList.styled";

import { IDishesItem } from "../../Interface/Interface";

export interface IBaseListProps {
  // children: ReactNode;
  items: IDishesItem[];
}

const BaseList: FunctionComponent<IBaseListProps> = (props) => {
  return (
    <List>
      {props.items.map(
        ({
          _id,
          title,
          description,
          price,
          currency,
          category,
          type,
          bought,
          photo,
          discount,
          weight,
          ingredients,
        }) => (
          <Item key={_id}>
            <LinkSinglePage to={`${type}/${title}`}>
              <Photo src={photo[0].photoUrl} alt={photo[0].alt} />
              <InfoWrapper>
                <Info>{title}</Info>
                <Description>{weight} gr</Description>
                <Info>
                  {price} {currency}.
                </Info>
              </InfoWrapper>
            </LinkSinglePage>
            <Button>Buy</Button>
          </Item>
        )
      )}
    </List>
  );
};

export default BaseList;
