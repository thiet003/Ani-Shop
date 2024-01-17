import React from 'react'
import { ProductList } from "../Components/Test/ProductList";
import { AnimatedBackground } from './AnimatedBackground/AnimatedBackground';

export const Shop = () => {
  return (
    <div>Shop
        <ProductList id={1} />
        <AnimatedBackground />
    </div>
  )
}
