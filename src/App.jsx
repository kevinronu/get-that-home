import { useState, useContext } from "react";
import { Global, ThemeProvider, css } from "@emotion/react";

import {
  GlobalThemeStyle,
  darkTheme,
  isDarkModeActive,
  lightTheme,
} from "./styles/themes";
import { AuthContext } from "./context/auth-context";
import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedLandlordApp from "./AuthenticatedLandlordApp";
import AuthenticatedSeekerApp from "./AuthenticatedSeekerApp";

function App() {
  const [darkMode, SetDarkMode] = useState(isDarkModeActive());
  const { user } = useContext(AuthContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${GlobalThemeStyle(darkMode ? darkTheme : lightTheme)}
        `}
      />
      {!user ? (
        <UnauthenticatedApp />
      ) : user.role === "landlord" ? (
        <AuthenticatedLandlordApp />
      ) : (
        <AuthenticatedSeekerApp />
      )}
    </ThemeProvider>
  );
}

export default App;
