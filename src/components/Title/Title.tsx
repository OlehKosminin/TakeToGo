import React, { FunctionComponent, ReactNode } from "react";
import { TitleEl } from "./Title.styled";

export interface ITitleProps {
  children: ReactNode;
}

const Title: FunctionComponent<ITitleProps> = ({ children }) => {
  return <TitleEl>{children}</TitleEl>;
};

export default Title;
