import React, { FunctionComponent } from "react";

import SectionComponent from "../../components/Section/Section";

import Hero from "../../modules/Hero/Hero";

export interface IMainPageProps {}

const MainPage: FunctionComponent<IMainPageProps> = (props) => {
  return (
    <SectionComponent color="teal">
      <Hero />
    </SectionComponent>
  );
};

export default MainPage;
