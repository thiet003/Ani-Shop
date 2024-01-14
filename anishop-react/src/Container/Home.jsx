import React from 'react'
import { ReactComponent as YourSvg } from "../asset/Home_Page.svg";
import { AnimatedBackground } from './AnimatedBackground/AnimatedBackground';

export const Home = () => {
  return (
    <div className='bg-[#fe8572] w-full justify-center items-center flex'>

        {/* <YourSvg /> */}
        <AnimatedBackground />
    </div>
  )
}
