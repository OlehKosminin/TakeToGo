import React, { FunctionComponent } from "react";

import SectionComponent from "../../components/Section/Section";
import Hero from "../../modules/Hero/Hero";

export interface IMainPageProps {}

const images = [
  "https://res.cloudinary.com/dciop8duy/image/upload/v1689427428/top-view-delicious-sushi-with-copy-space_qo6mip.jpg",
  "https://res.cloudinary.com/dciop8duy/image/upload/v1689427841/top-view-delicious-sushi-concept_yusnex.jpg",
];

const MainPage: FunctionComponent<IMainPageProps> = (props) => {
  return (
    <SectionComponent color="teal">
      <Hero images={images} />
    </SectionComponent>
  );
};

export default MainPage;
