import { useState, useContext, lazy, Suspense } from "react";
import { Global, ThemeProvider, css } from "@emotion/react";

import {
  GlobalThemeStyle,
  darkTheme,
  isDarkModeActive,
  lightTheme,
} from "./styles/themes";
import { AuthContext } from "./context/auth-context";
import LoadingPage from "./pages/LoadingPage";
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));
const AuthenticatedLandlordApp = lazy(() =>
  import("./AuthenticatedLandlordApp")
);
const AuthenticatedSeekerApp = lazy(() => import("./AuthenticatedSeekerApp"));

function App() {
  const [darkMode] = useState(isDarkModeActive());
  const { user } = useContext(AuthContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${GlobalThemeStyle(darkMode ? darkTheme : lightTheme)}
        `}
      />
      <Suspense fallback={<LoadingPage />}>
        {!user ? (
          <UnauthenticatedApp />
        ) : user.role === "landlord" ? (
          <AuthenticatedLandlordApp />
        ) : (
          <AuthenticatedSeekerApp />
        )}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
