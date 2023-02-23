import "./App.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import { AppProvider, Page } from "@shopify/polaris";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className="mainSliderContainer">
        <Page>
          <ProductDetailsPage />
        </Page>
      </div>
    </AppProvider>
  );
}

export default App;
