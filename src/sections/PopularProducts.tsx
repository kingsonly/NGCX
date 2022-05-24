import { PopularCard, SectionHeading } from 'components'
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

const PopularProducts = () => {
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
                    <div className='flex'>
                        <PopularCard />
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