import React, { useState } from "react"
import { Featured_Items } from "../FeaturedItems/Featured_Items";
import { Product } from "./Single_Components_container";




//  =============== USING CLASSES =============
export const Product_item = () => {
  const [price, setPrice] = React.useState({});
  const [name, setName] = React.useState('');


  return (
    <>
    {/* ======== PASS setPrice & setName FUNCTION TO Featured_Items  ========  */}
    <Featured_Items setPrice={setPrice} setName={setName} />

    {/* ====== PASS STATE VALUES TO PRODUCT ============== */}
    <Product name={name} price={price} />
    </>
  )
};