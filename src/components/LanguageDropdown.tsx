import React, { useState } from "react";
import i18next from "i18next";
import styled from "styled-components";
import DownArrow from "src/assets/images/DownArrowWhite.svg";
import Selected from "src/assets/images/Selected.svg";
import World from "src/assets/images/World.svg";
import { Language } from "src/utils/enums/Language";
import theme from "src/utils/theme/theme";
import { translateError } from "src/utils/translations/Translator";

interface IProps {
  longLanguageName?: boolean;
}

const Dropdown = styled.div`
  position: absolute;
  background: ${() => theme.colors.white};
  width: 200px;
  right: 0;
  margin-top: 20px;
  border-radius: 10px;
  border: ${() => theme.borders.dropdown};
  z-index: ${() => theme.zIndex.dropdown};

  & .item {
    padding: 17px 20px;
    border-bottom: ${() => theme.borders.dropdownItem};
    line-height: normal;
    display: flex;
    justify-content: space-between;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${() => theme.colors.black};
  width: 100%;

  & > div {
    position: relative;
    width: auto;
  }

  img {
    width: 20px;
    height: 20px;
  }

  img#world-icon {
    margin-right: 10px;
  }

  img#selected-icon {
    width: 18px;
    height: 22px;
  }
`;

const StyledText = styled.span<{ underline?: boolean; color?: string }>`
  border-bottom: ${({ underline }) => (underline ? theme.borders.dropdown : "none")};
  color: ${({ color }) => (color ? color : "inherit")};
`;

const languages: {
  [key in Language]: string;
} = {
  EN: "English",
  DE: "Deutsch"
} as const;

const allowedLanguages = [Language.EN, Language.DE];

const LanguageDropdown: React.FC<IProps> = ({ longLanguageName }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown((prevShowDropdown) => !prevShowDropdown);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const changeLanguage = async (language: Language) => {
    try {
      await i18next.changeLanguage(language.toLocaleLowerCase());
      closeDropdown();
    } catch (e: any) {
      console.error(translateError(e));
    }
  };

  const currentLanguage = i18next.language.toUpperCase() as Language;

  return (
    <StyledFlex>
      <div style={{ position: "relative", width: "auto" }}>
        <div
          style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          onClick={toggleDropdown}
        >
          <img id="world-icon" src={World} alt="world-icon" />
          <StyledText
            underline={longLanguageName}
            color={theme.colors.white}
            style={{ margin: "0 8px 0 2px", fontSize: 20 }}
          >
            {languages[currentLanguage]}
          </StyledText>
          <img src={DownArrow} alt="down-arrow" />
        </div>
        {showDropdown && (
          <Dropdown>
            {allowedLanguages.map((language: Language, i) => (
              <div key={i} className="item" onClick={() => changeLanguage(language)}>
                <StyledText color={theme.colors.black}>{languages[language]}</StyledText>
                {currentLanguage === language && (
                  <img id="selected-icon" src={Selected} alt="selected-icon" />
                )}
              </div>
            ))}
          </Dropdown>
        )}
      </div>
    </StyledFlex>
  );
};

export default LanguageDropdown;
