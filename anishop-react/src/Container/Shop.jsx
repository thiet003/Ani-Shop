import React, { useEffect } from 'react'
import { ProductList } from "../Components/Test/ProductList";
import { AnimatedBackground } from './AnimatedBackground/AnimatedBackground';
import { useNavigate } from 'react-router-dom';

export const Shop = () => {
  let navigate = useNavigate();
  useEffect(()=>{
  if(sessionStorage.getItem("token") == null)
  {
      navigate('/login');
  }
  },[]);
  return (
    <div>Shop
        <ProductList id={1} />
        <AnimatedBackground />
    </div>
  )
}
