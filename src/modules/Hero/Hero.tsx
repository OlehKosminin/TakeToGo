import React, { FunctionComponent, ReactNode } from "react";

import CustomSlider from "../../components/Slider/Slider";

import {
  Description,
  HeroSection,
  HeroWrapper,
  SubTitle,
  Title,
} from "./Hero.styled";
import useScreenWidth from "../../hooks/useScreenWidth";

export interface IHeroProps {
  children?: ReactNode;
  images: string[];
}

const Hero: FunctionComponent<IHeroProps> = (props) => {
  const screenWidth = useScreenWidth();
  return (
    <>
      <HeroSection {...props}>
        {screenWidth > 1000 && <CustomSlider slides={props.images} />}
      </HeroSection>
      <HeroWrapper>
        <Title>Sushi</Title>
        <SubTitle>best quality</SubTitle>
        <Description>
          Here will be your introduction about your roles or other gaps
        </Description>
      </HeroWrapper>
    </>
  );
};

export default Hero;
