import React from "react";
import styled from "styled-components";
import LanguageDropdown from "src/components/LanguageDropdown";
import theme from "src/utils/theme/theme";
import ReactLogo from "src/assets/react.png";

interface HeaderProps {
  title: string;
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${() => theme.colors.black};
  color: ${() => theme.colors.white};
  height: 100px;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 60px;
  height: 50px;
  margin-right: 10px;
`;

const CenterContent = styled.div`
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;

const RightContent = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
`;

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <LeftContent>
        <LogoImage src={ReactLogo} alt="React Logo" />
      </LeftContent>
      <CenterContent>{title}</CenterContent>
      <RightContent>
        <LanguageDropdown />
      </RightContent>
    </HeaderContainer>
  );
};

export default Header;
