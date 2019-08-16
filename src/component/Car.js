/*
 * @Author: Suvesh Agnihotri 
 * @Date: 2019-08-13 23:13:50 
 * @Last Modified by: Suvesh Agnihotri
 * @Last Modified time: 2019-08-13 23:14:32
 */
import React, { Fragment } from 'react';

const Cars = props => (
  <Fragment>
    <p>Name: {props.name}</p>
    <p>Price: ${props.price}</p>
    <button onClick={props.incrementPrice}>&uarr;</button>
    <button onClick={props.decrementPrice}>&darr;</button>
  </Fragment>
);

export default Cars