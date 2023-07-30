import { useState } from "react";
import { Global, ThemeProvider, css } from "@emotion/react";

import {
  GlobalThemeStyle,
  darkTheme,
  isDarkModeActive,
  lightTheme,
} from "./styles/themes";

function App() {
  const [darkMode, SetDarkMode] = useState(isDarkModeActive());

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Global
        styles={css`
          ${GlobalThemeStyle(darkMode ? darkTheme : lightTheme)}
        `}
      />
      Get That Home
    </ThemeProvider>
  );
}

export default App;
