import * as React from "react";
//import '../../App.scss';


interface topBarComponentProps {
  image: string;
  category: string;
  cta: () => void;
  account: () => void;
  wishlist: () => void;
  compare: () => void;
}

const TopBarComponent = (props: topBarComponentProps) => {
  const { image, cta,category,account,wishlist,compare } = props;

  return (
  <div className="grid grid-cols-5 gap-6">
    <div className="">
      <div className="flex space-x-8">
        <div>
          <img src={image} className="" />
      
        </div>
        <div className="font-['audiowide'] text-[40px] text-[#3F434A]">
          NGCX
        </div>
      </div>
     
    </div>

    <div className="col-span-2">b</div>

    <div className="col-span-2 flex justify-center">
      <div className="flex">
        <div className="mr-[20px]">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-[#253D4E] mr-[4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[16px] font-poppins text-[#7E7E7E]">Account</span>
          </a>
        </div>

        <div className="mr-[20px]"> 
          <a href="/">
            <svg className="h-6 w-6 inline-block text-[#253D4E] mr-[4px]" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.6287 8.34001L22.0456 7.51349C18.98 2.24706 12.3723 0.235169 6.89188 2.8996V0.883301H5.25195V5.80309H10.1717V4.16316H8.07673C12.7156 2.1954 18.0939 3.98513 20.6287 8.34001Z" fill="#253D4E"/>
              <path d="M5.66221 21.1169C1.86029 18.0291 0.85963 12.6394 3.2999 8.39272L1.87808 7.57275C-0.905241 12.4195 0.147901 18.5602 4.38717 22.2026H2.38236V23.8425H7.30214V18.9227H5.66221V21.1169Z" fill="#253D4E"/>
              <path d="M22.8523 11.1885L19.374 14.6676L20.5334 15.827L21.9274 14.4331C21.3806 19.5133 17.0997 23.3688 11.9902 23.383V25.0229C18.0779 25.0069 23.1281 20.3087 23.5829 14.2379L25.172 15.827L26.3314 14.6676L22.8523 11.1885Z" fill="#253D4E"/>
            </svg>
            <span className="text-[16px] font-poppins text-[#7E7E7E]">Compare</span>
          </a>
        </div>

        <div className="mr-[20px]">
          <a href="/">  
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-[#253D4E] mr-[4px] badge-counter" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-[16px] font-poppins text-[#7E7E7E]">
              Wishlist
            </span>
          </a>
        </div>
      </div>
    </div>
   
  </div>
   
  );
};

export default TopBarComponent;
