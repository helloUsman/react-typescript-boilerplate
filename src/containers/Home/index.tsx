import React from "react";
import styled from "styled-components";
import { useTranslation } from "src/utils/translations/Translator";

interface HomeProps {}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 200px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
`;

const Home: React.FC<HomeProps> = () => {
  const { t } = useTranslation();
  return (
    <HomeContainer>
      <Section>
        <Title>{t("WELCOME_TITLE")}</Title>
        <Description>{t("WELCOME_DESCRIPTION")}</Description>
      </Section>
      <Section>
        <Title>{t("FEATURED_CARDS_TITLE")}</Title>
        <CardsContainer>
          {[1, 2, 3, 4, 5].map((cardNumber) => (
            <Card key={cardNumber}>
              <h3>{t("TITLE", { cardNumber })}</h3>
              <p>{t("DESCRIPTION", { cardNumber })}</p>
            </Card>
          ))}
        </CardsContainer>
      </Section>

      <Section>
        <Title>{t("ANOTHER_SECTION_TITLE")}</Title>
        <Description>{t("ANOTHER_SECTION_DESCRIPTION")}</Description>
        <Description>{"This is s3 change"}</Description>
      </Section>
    </HomeContainer>
  );
};

export default Home;
