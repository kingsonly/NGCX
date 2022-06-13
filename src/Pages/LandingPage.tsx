import React,{useState} from "react";
import Container from "../Component/GeneralComponent/Container";
import TopBarComponent from "../Component/TopBarComponent";
import NGCXLOGO from "../assets/images/ngcx-logo.png";
import PopularProducts from "sections/PopularProducts";
import BestSellers from "sections/BestSellers";
import DealForTheDay from "sections/DealForTheDay";
import TopSelling from "sections/TopSelling";
import  Hero   from "sections/Hero";
import { MapSection } from "sections";
import { GasCylinder } from 'assets'
import HeaderMenu from "Component/headerMenu";


const LandingPage = () => {
  
  React.useEffect(() => {
    setProductListPopular()
  }, []);

  interface ProductList{
    Image:string;
    Badge:string;
    Title:string;
    Subtitle:string;
    Price:string;
    Discount:string;
    Wishlist:()=>void;
    Cta:()=>void;
    Badgetext:string;
    Size:string;
    Ratting?:string;
  
  }



  const [popularProduct,setPopularProduct] = useState<ProductList[]>();

  
  const topBarSearchAction = () => {
    alert(123)
  }

  
  const setProductListPopular = () => {
    var plist = 
    [
      {
        Image:GasCylinder,
        Badge:"success",
        Title:"Ohgas",
        Subtitle:"LPG",
        Price:"2500",
        Discount:"1000",
        Wishlist:topBarSearchAction,
        Cta:topBarSearchAction,
        Badgetext:"-17",
        Size:"5",
        Ratting:"4.0",
      },
      
      {
        Image:GasCylinder,
        Badge:"danger",
        Title:"Hasman",
        Subtitle:"LPG",
        Price:"2500",
        Discount:"1000",
        Wishlist:topBarSearchAction,
        Cta:topBarSearchAction,
        Badgetext:"Hot",
        Size:"8",
        Ratting:"5.0",
      },

      {
        Image:GasCylinder,
        Badge:"danger",
        Title:"Hasman",
        Subtitle:"LPG",
        Price:"2500",
        Discount:"1000",
        Wishlist:topBarSearchAction,
        Cta:topBarSearchAction,
        Badgetext:"Hot",
        Size:"8",
        Ratting:"5.0",
      },

      {
        Image:GasCylinder,
        Badge:"danger",
        Title:"Hasman",
        Subtitle:"LPG",
        Price:"2500",
        Discount:"1000",
        Wishlist:topBarSearchAction,
        Cta:topBarSearchAction,
        Badgetext:"Hot",
        Size:"8",
        Ratting:"5.0",
      },

      {
        Image:GasCylinder,
        Badge:"danger",
        Title:"Hasman",
        Subtitle:"LPG",
        Price:"2500",
        Discount:"1000",
        Wishlist:topBarSearchAction,
        Cta:topBarSearchAction,
        Badgetext:"Hot",
        Size:"8",
        Ratting:"5.0",
      },
    ]
    
    setPopularProduct(plist)

  }

  const getPopularProduct = () => {

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
          <PopularProducts productList={popularProduct} />
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
