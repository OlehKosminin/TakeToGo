import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background: #1a1a1a;
  min-height: 100px;
  padding: 30px 2em;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  /* flex-direction: column; */
`;

export const SocialIconContainer = styled.div``;

export const SocialIconItem = styled.li``;

export const SocialIconLink = styled.a``;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const MenuLink = styled.a`
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;

  &:hover {
    opacity: 1;
  }
`;

export const FooterText = styled.p`
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
`;
