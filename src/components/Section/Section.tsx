import React, { FunctionComponent, ReactNode } from "react";

import { Section } from "./Section.styled";

export interface ISectionComponentProps {
  children: ReactNode;
}

const SectionComponent: FunctionComponent<ISectionComponentProps> = (props) => {
  return <Section {...props} />;
};

export default SectionComponent;
