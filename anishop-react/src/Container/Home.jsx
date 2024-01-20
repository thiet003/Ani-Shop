import React from 'react'
import { ReactComponent as YourSvg } from "../asset/Home_Page.svg";
import { AnimatedBackground } from './AnimatedBackground/AnimatedBackground';

export const Home = () => {
  return (
    <div className='bg-tranparent w-full justify-center items-center flex h-[150rem]'>

        {/* <YourSvg /> */}
        <AnimatedBackground />
    </div>
  )
}
