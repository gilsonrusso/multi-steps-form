import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme/default";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormProvider>
        <Router />
      </FormProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
