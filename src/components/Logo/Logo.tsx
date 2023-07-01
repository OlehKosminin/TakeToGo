import React, { FunctionComponent } from 'react';

import { LogoContainer } from './Logo.styled';

export interface ILogoProps {
    children: React.ReactNode;
}

const Logo: FunctionComponent<ILogoProps> = ({ children }) => {
    return <LogoContainer>{children}</LogoContainer>;
};

export default Logo;
