import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { itemname: 'Laptop', price: 45000 },
        { itemname: 'Mobile Phone', price: 25000 },
        { itemname: 'Headphones', price: 2000 },
        { itemname: 'Smart Watch', price: 15000 },
        { itemname: 'Tablet', price: 30000 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Online Shopping Cart</h1>
        <div>
          {this.state.items.map((item, index) => (
            <Cart key={index} itemname={item.itemname} price={item.price} />
          ))}
        </div>
      </div>
    );
  }
}

export default OnlineShopping;
