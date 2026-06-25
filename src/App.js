import React from "react";
import Login from "./Login";
import { useTranslation } from "react-i18next";
import UserForm from "./UserForm";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>

      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("es")}>Spanish</button>

      <Login />
      <UserForm />
    </div>
    
  );
}

export default App;