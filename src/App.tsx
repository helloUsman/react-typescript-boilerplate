import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Header from "src/components/Header";
import Routes from "src/routing/Routes";
import { useTranslation } from "src/utils/translations/Translator";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Router>
        <Header title={t("REACT_BOILERPLATE")} />
        <Routes />
      </Router>
    </>
  );
};

export default App;
