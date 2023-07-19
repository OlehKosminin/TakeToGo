import styled from "styled-components";
import { NavLink } from "react-router-dom";

import responsiveFont from "../../mixins/responsiveFont";

const responsiveFontMixin = (props: any) =>
  responsiveFont({
    minWidth: props.theme.baseSettings.mobile,
    maxWidth: props.theme.baseSettings.pc,
    minFontSize: props.theme.logo.fontSizeMobile,
    maxFontSize: props.theme.logo.fontSizePc,
  });

export const Section = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5vw;

  align-items: center;

  padding: 0 1em 1em 1em;

  @media ${(props) => props.theme.media.tabletToPc} {
    flex-direction: row-reverse;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.baseSettings.secondColor};

  margin-bottom: 20px;

  @media ${(props) => props.theme.media.laptop} {
    margin-bottom: 0;
  }
`;
export const List = styled.ul`
  overflow: hidden;
  text-align: start;

  @media ${(props) => props.theme.media.laptop} {
    display: flex;
  }
`;

export const Item = styled.li`
  ${responsiveFontMixin}

  @media ${(props) => props.theme.media.laptop} {
    margin-right: 3vh;
  }
`;

export const Number = styled.a`
  ${responsiveFontMixin}
  color: ${(props) => props.theme.baseSettings.secondColor};
`;
