import React, { FunctionComponent } from "react";

import { LogoContainer } from "./Logo.styled";

export interface ILogoProps {
  children: React.ReactNode;
  margin: string;
}

const Logo: FunctionComponent<ILogoProps> = ({ children }, props) => {
  return <LogoContainer {...props}>{children}</LogoContainer>;
};

export default Logo;
