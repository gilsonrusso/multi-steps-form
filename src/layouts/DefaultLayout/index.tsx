import { ReactNode } from "react";
import { ThemeContainer, Content, Page, Sidebar, Steps } from "./styles";
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";

// type ThemeProps = {
//   children: ReactNode;
// };

export const DefaultLayout = (/*{ children }: ThemeProps*/) => {
  return (
    <ThemeContainer>
      <Content>
        <Header />
        <Steps>
          <Sidebar>...</Sidebar>
          <Page>
            <Outlet />
          </Page>
        </Steps>
      </Content>
    </ThemeContainer>
  );
};
