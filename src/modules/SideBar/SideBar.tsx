import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuButtonIconClose,
  Overlay,
  MenuButtonIconOpen,
  SideBarMenu,
  Wrapper,
  TextUnderButton,
} from "./SideBar.styled";

import ContactInfoBlock from "../../components/ContactInfoBlock/ContactInfoBlock";
import NavItem from "../../components/NavList/NavList";
import SmallMenu from "../../components/SmallMenu/SmallMenu";

import { fakeApi } from "../../FakeAPI/data";
import { smallMenuData } from "../../FakeAPI/smallMenuData";
import { fakeBottomApi } from "../../FakeAPI/bottomMenuData";

import useScreenWidth from "../../hooks/useScreenWidth";

export interface ISideBarProps {}

interface IEvent {
  target: EventTarget;
  currentTarget: EventTarget;
  code?: string;
}

const SideBar: FunctionComponent<ISideBarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const closeModal = (event: KeyboardEvent): void => {
      const { target, currentTarget, code } = event;
      if (target === currentTarget || code === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeModal);
    return () => document.removeEventListener("keydown", closeModal);
  });

  const handleClickBackdrop: React.MouseEventHandler<HTMLDivElement> = (
    event: IEvent
  ) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      setIsOpen(false);
    }
  };

  if (screenWidth > 1200) {
    return (
      <Menu>
        <MenuButton onClick={() => setIsOpen((Pr) => !Pr)}>
          {isOpen ? <MenuButtonIconClose /> : <MenuButtonIconOpen />}
        </MenuButton>
        <Wrapper
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(-150%)",
            transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <SmallMenu items={smallMenuData}></SmallMenu>
        </Wrapper>
        {!isOpen && <TextUnderButton>menu</TextUnderButton>}
      </Menu>
    );
  }

  return (
    <Menu>
      <MenuButton onClick={() => setIsOpen((Pr) => !Pr)}>
        {isOpen ? <MenuButtonIconClose /> : <MenuButtonIconOpen />}
      </MenuButton>
      <Overlay
        onClick={handleClickBackdrop}
        style={{
          transition: "all 300ms ease-out",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <SideBarMenu
          style={{
            transform: isOpen
              ? "translate3d(100%, 0, 0)"
              : "translate3d(0, 0, 0)",
          }}
        >
          <ContactInfoBlock items={fakeApi}></ContactInfoBlock>
          <SmallMenu items={smallMenuData}></SmallMenu>
          <NavItem items={fakeBottomApi}></NavItem>
        </SideBarMenu>
      </Overlay>
    </Menu>
  );
};

export default SideBar;
