import React from "react"


// =========  PRODUCT ITEMS / CARD  ===========
// export const product_item = ({price, name}) => {
//   return (
//     <div className='item__container'>
//       <div className='image__container'></div>
//       <div className='text__container'>
//         <p className='price'>€{price}</p>
//         <p className='product__name'>{props.name}</p>
//         <a href='#'>
//         <button className='green__button add-to-cart'> Add to Cart</button>
//         </a>
//       </div>
//     </div>
//   )
// }



//  =============== USING CLASSES =============
export const Product = ({name, price}) => {

  return (
    <div className='item__container'>
      <div className='image__container'></div>
      <div className='text__container'>
        <p className='price'>€{price}</p>
        <p className='product__name'>{name}</p>
        <a href='#'>
        <button className='green__button add-to-cart'> Add to Cart</button>
        </a>
      </div>
    </div>
  )
};