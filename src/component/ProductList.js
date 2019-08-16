/*
 * @Author: Suvesh Agnihotri 
 * @Date: 2019-08-13 23:12:02 
 * @Last Modified by: Suvesh Agnihotri
 * @Last Modified time: 2019-08-13 23:15:40
 */
import React from 'react';
import Cars from './Cars';

const ProductList = (props) =>{
  return(
    <div className="product-list">
      <h2>Product list:</h2>
      {/* Pass props twice */}
      <Cars
        cars={props.cars}
        incrementCarPrice={props.incrementCarPrice}
        decrementCarPrice={props.decrementCarPrice}
      />
    </div>
  )
}

export default ProductList;