import * as React from "react";
import Container from "../Component/GeneralComponent/Container";
import TopBarComponent from "../Component/TopBarComponent";
import Hero from "../Component/HeroComponent";
import NGCXLOGO from "../assets/images/ngcx-logo.png";


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

      <section>
        <Container>
          <Hero />
        </Container>
      </section>

    </div>
  );
};



export default LandingPage;
