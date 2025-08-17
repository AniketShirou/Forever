import React, { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

   const currency = '$';
   const delivery_fee = 50;
   const [search , setSearch] = useState('');
   const [showSearch , setShowSearch] = useState(false);
   const [cartItems, setCartItems] = useState({});

   const addToCart = async (ItemId , size) =>{
        
      let cartData = structuredClone(cartItems);

      if(cartData[ItemId]){
         if(cartData[ItemId][size]){
            cartData[ItemId][size] += 1;
         }

         else{
            cartData[ItemId][size] = 1;
         }
      }

      else{
         cartData[ItemId] = {};
         cartData[ItemId][size] = 1;
      }

      setCartItems(cartData);
   }

   useEffect(() => {
      console.log("Cart Items Updated: ", cartItems);
   }, [cartItems]);  

   const value = {
        products , currency , delivery_fee, search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart
   }

   return(
     <ShopContext.Provider value={value}>
        {props.children}
     </ShopContext.Provider>
   )
}

export default ShopContextProvider;