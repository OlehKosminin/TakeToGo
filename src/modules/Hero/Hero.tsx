import React, { FunctionComponent, ReactNode } from "react";

import { HeroSection } from "./Hero.styled";

export interface IHeroProps {
  children?: ReactNode;
}

const Hero: FunctionComponent<IHeroProps> = (props) => {
  return <HeroSection {...props}></HeroSection>;
};

export default Hero;
