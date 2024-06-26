import React, {createContext, useState } from 'react';

import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

export function StoreContextProvider(props){
  const [cartItems, setCartItems] = useState({});
  const url = "https://localhost:4000"
  const [token,setToken] = useState("")
  const [food_list,setFoodList] = useState([])

  const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  function getTotalCartAmount(){
    let totalAmount =0;
    for(const item in cartItems)
      {
        if(cartItems[item]>0){
          let itemInfo =food_list.find((product)=>product._id === item);
          totalAmount += itemInfo.price*cartItems[item];
        }
      }
    return totalAmount;  
  } 
  const fetchFoodList = async()=>{
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
  }
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

