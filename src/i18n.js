import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
  translation: {
    login: "Login",
    email: "Email",
    password: "Password",
    loading: "Logging in...",
    login_success: "Login successful!",
    login_error: "Invalid login. Please try again."
  }
},
es: {
  translation: {
    login: "Iniciar sesión",
    email: "Correo electrónico",
    password: "Contraseña",
    loading: "Iniciando sesión...",
    login_success: "¡Inicio de sesión exitoso!",
    login_error: "Inicio de sesión inválido."
  }
}
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;