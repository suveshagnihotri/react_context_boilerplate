/*
 * @Author: Suvesh Agnihotri 
 * @Date: 2019-08-13 23:17:57 
 * @Last Modified by: Suvesh Agnihotri
 * @Last Modified time: 2019-08-13 23:18:38
 */


import React, { PureComponent } from 'react';
import MyContext from './MyContext';

class MyProvider extends PureComponent {
  state = {
    cars: {
      car001: {
        name: 'Honda',
        price: 100
      },
      car002: {
        name: 'BMW',
        price: 150
      },
      car003: {
        name: 'Mercedes',
        price: 200
      }
    }
  };

  render() {
    return ( 
    <MyContext.Provider value = {
        {
          cars: this.state.cars,
          incrementPrice: selectedID => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price + 1;
            this.setState({
              cars
            });
          },
          decrementPrice: selectedID => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price - 1;
            this.setState({
              cars
            });
          }
        }
      } >
      {
        this.props.children
      } 
      </MyContext.Provider>
    );
  }
}

export default MyProvider;