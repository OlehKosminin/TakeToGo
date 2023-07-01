import React, { FunctionComponent } from 'react';

import { Section, Container } from './Header.styled';

import Logo from '../../components/Logo/Logo';

export interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = (props) => {
    return (
        <Section>
            <Container>
                <Logo>TakeToGo</Logo>
            </Container>
        </Section>
    );
};

export default Header;
