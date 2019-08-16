/*
 * @Author: Suvesh Agnihotri 
 * @Date: 2019-08-13 23:13:08 
 * @Last Modified by: Suvesh Agnihotri
 * @Last Modified time: 2019-08-14 00:52:44
 */
import React, { Fragment } from 'react';
import Car from './Car';
import MyContext from '../context/MyContext';


const Cars = props => (
  <MyContext.Consumer>
    { context =>(
      <Fragment>
        <h4>Cars:</h4>
        { Object.keys(context.cars).map(carID => (
          <Car
            key={carID}
            name={context.cars[carID].name}
            price={context.cars[carID].price}
            incrementPrice={() => context.incrementCarPrice(carID)}
            decrementPrice={() => context.decrementCarPrice(carID)}
          />
        ))}
      </Fragment>
    )
    }
  </MyContext.Consumer>
);
export default Cars;