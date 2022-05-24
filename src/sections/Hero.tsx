import React from 'react'
import { Banner } from 'components';
import { HeroBannerImg } from 'assets'

const Hero = () => {
  return (
    <div>
        <Banner title="Don't miss amazing offers" text='Sign up for our news letter' img={HeroBannerImg} />
    </div>
  )
}

export default Hero