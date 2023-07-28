import React, { FunctionComponent } from "react";

import { LogoContainer, Link } from "./Logo.styled";

export interface ILogoProps {
  children: React.ReactNode;
  margin?: string;
}

const Logo: FunctionComponent<ILogoProps> = ({ children }, props) => {
  return (
    <Link to="/">
      <LogoContainer {...props}>{children}</LogoContainer>
    </Link>
  );
};

export default Logo;
