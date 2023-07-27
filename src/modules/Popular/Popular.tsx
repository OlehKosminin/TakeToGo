import React, { FunctionComponent, ReactNode } from "react";
import { Section } from "./Popular.styled";

import Title from "../../components/Title/Title";
import BaseList from "../../components/BaseList/BaseList";
import FadeInSection from "../../components/FadeSection/FadeSection";

import { dishesItem } from "../../FakeAPI/popularItem";

export interface IPopularProps {
  // children: ReactNode;
}

const Popular: FunctionComponent<IPopularProps> = (props) => {
  return (
    <Section>
      <FadeInSection>
        <Title>Popular</Title>
      </FadeInSection>

      <BaseList items={dishesItem} />
    </Section>
  );
};

export default Popular;
