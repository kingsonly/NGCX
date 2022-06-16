import { PopularCard, SectionHeading } from 'Component'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabData = [ 
    {
        id:0,
        tab: "All",
        tabContent: [
            {

            }
        ]
    },
    {
        id:1,
        tab: "Piped"
    },
    {
        id:2,
        tab:"Natural"
    },
    {
        id:3,
        tab: "Petroleum"
    },
    {
        id:4,
        tab: "Liquified"
    },
    {
        id:5,
        tab: "Compressed"
    }
]

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

  interface ProductListComposnetProps{
    productList?:ProductList[];
  
  }

 

const PopularProducts = (props:ProductListComposnetProps) => {

    const {productList} = props
    
   return (
    <div>
        <div>
            <Tabs>
                <div className='flex justify-between items-center'>
                    <SectionHeading text="Popular Products" />
                    <TabList className={"flex"}>
                        {tabData.map((item) => (
                            <Tab className={"border-none mx-3 text-sm text-ncgx-text-lightgray outline-none cursor-pointer"} key={item.id}>{item.tab}</Tab>
                        ))} 
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid gap-4 grid-cols-5'>
                   {
                    productList !== undefined ? productList.map((value,key) => (
                        <PopularCard 
                            Image={value.Image} 
                            Subtitle = {value.Subtitle}
                            Price = {value.Price}
                            Discount = {value.Discount}
                            Wishlist = {value.Wishlist}
                            Cta = {value.Cta}
                            Badgetext = {value.Badgetext}
                            Size = {value.Size}
                            Ratting = {value.Ratting}
                            Badge = {value.Badge}
                            Title = {value.Title}
                        />
                    )):null
                   } 
                    
                    </div>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    </div>
  )
}

export default PopularProducts