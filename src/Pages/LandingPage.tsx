import * as React from "react";
import Container from "../Component/GeneralComponent/Container";
import TopBarComponent from "../Component/TopBarComponent";
import NGCXLOGO from "../assets/images/ngcx-logo.png";
import PopularProducts from "sections/PopularProducts";
import BestSellers from "sections/BestSellers";
import DealForTheDay from "sections/DealForTheDay";
import TopSelling from "sections/TopSelling";
import  Hero   from "sections/Hero";
import { HeaderMenu } from "Component";
import { MapSection } from "sections";


const LandingPage = () => {
  
  React.useEffect(() => {
    console.log("will use")
  }, []);

  const topBarSearchAction = () => {

  }
  const topBarAccountAction = () => {

  }
  const topBarCategoryAction = () => {

  }
  const topBarWishlistAction = () => {

  }

  const topBarCompareAction = () => {

  }

  return (
    <div className="pt-24 md:pt-0">
      <header className="top-0 z-50 w-full bg-white py-5 mt-6">
        <Container>
          <TopBarComponent 
          image={NGCXLOGO} 
          category = {"test"}
          cta = {topBarSearchAction}
          account = {topBarAccountAction}
          wishlist = {topBarWishlistAction}
          compare = {topBarCompareAction}
          />
        </Container>
      </header>

      <section className="border-t-2 border-b-2 border-[#E5E5E5]">
        <Container>
          <HeaderMenu />
        </Container>
      </section>

      <section>
        <Container className={"2xl:mt-8 md:mt-8 sm:mt-8 mt-8"}>
          <Hero />
        </Container>
      </section>

      <section>
        <Container>
          <MapSection />
        </Container>
      </section>

      <section>
        <Container>
          <PopularProducts />
        </Container>
      </section>

      <section>
        <Container>
          <BestSellers />
        </Container>
      </section>

      <section>
        <Container>
          <DealForTheDay />
        </Container>
      </section>
      
      <section>
        <Container>
          <TopSelling />
        </Container>
      </section>

    </div>
  );
};



export default LandingPage;
