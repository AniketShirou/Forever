import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

   const currency = '$';
   const delivery_fee = 50;
   const [search , setSearch] = useState('');
   const [showSearch , setShowSearch] = useState(false);
   const [cartItems, setCartItems] = useState({});
   const navigate = useNavigate();

   const addToCart = async (ItemId , size) =>{

      if(!size){
         toast.error("Please select a size");
         return;
      }
        
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
   
   const getCartCount = () => {
      let count = 0;
      for(let item in cartItems){
         for(let size in cartItems[item]){
            try{
               if(cartItems[item][size] > 0){
                  count += cartItems[item][size];
               }
            } catch(e){
               console.error("Error in getCartCount: ", e);
            }
         }
      }

      return count;
   }

   const updateQuantity = (itemId, size, quantity) => {
      let cartData = structuredClone(cartItems);
      cartData[itemId][size] = quantity;

      setCartItems(cartData);
   }

   const getCartAmount = () => {
      let total = 0;
      for(let items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            for(let size in cartItems[items]){
               try{
                  if(cartItems[items][size] > 0){
                     total += itemInfo.price * cartItems[items][size];
                  }
               } catch(e){
                  console.error("Error in getCartAmount: ", e);
               }
            }
         }

         return total;
      }


   const value = {
        products , currency , delivery_fee, search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate
   }

   return(
     <ShopContext.Provider value={value}>
        {props.children}
     </ShopContext.Provider>
   )
};

export default ShopContextProvider;