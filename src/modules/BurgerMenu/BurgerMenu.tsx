import React, {
  FunctionComponent,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  Menu,
  MenuButton,
  MenuButtonIconClose,
  MenuButtonIconOpen,
  Overlay,
  Wrapper,
} from "./BurgerMenu.styled";
// import useScreenWidth from "../../hooks/useScreenWidth";

export interface IBurgerMenuProps {
  children: ReactNode;
}

interface IEvent {
  target: EventTarget;
  currentTarget: EventTarget;
  code?: string;
}

const BurgerMenu: FunctionComponent<IBurgerMenuProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // const screenWidth = useScreenWidth();

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
    console.log("I work");
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <MenuButton onClick={() => setIsOpen((Pr) => !Pr)}>
        {isOpen ? <MenuButtonIconClose /> : <MenuButtonIconOpen />}
      </MenuButton>
      <Menu>
        <Overlay
          onClick={handleClickBackdrop}
          style={{
            transition: "all 300ms ease-out",
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          <Wrapper>{props.children}</Wrapper>
        </Overlay>
      </Menu>
    </>
  );
};
export default BurgerMenu;
