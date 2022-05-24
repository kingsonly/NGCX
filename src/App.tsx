import Layout from "Layout";
import {
  BestSellersSection,
  DealForTheDaySection,
  HeroSection,
  MapSection,
  PopularProductsSection,
  TopSellingSection,
} from "sections";
import { Banner } from "./components";
import { FooterBanner } from "./assets";

function App() {
  return (
    <div className="App">
      <Layout>
        <HeroSection />
        <MapSection />
        <PopularProductsSection />
        <BestSellersSection />
        <DealForTheDaySection />
        <TopSellingSection />
        <div className="mt-10">
          <Banner
            title="Stay home & get your daily gas needs from us"
            text="Subscribe to NGCX"
            img={FooterBanner}
          />
        </div>
      </Layout>
    </div>
  );
}

export default App;
