import styled from "styled-components";

export const Section = styled.section`
  @media ${(props) => props.theme.media.laptop} {
    padding-left: 100px;
  }
`;
