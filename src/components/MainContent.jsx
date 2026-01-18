import ReduxProvider from "@/app/providers/ReduxProvider";
import { SiteDataProvider } from "@/app/providers/SiteDataProvider";

const MainContent = ({ children }) => {
  return (
    <ReduxProvider>
      <SiteDataProvider>{children}</SiteDataProvider>
    </ReduxProvider>
  );
};

export default MainContent;
