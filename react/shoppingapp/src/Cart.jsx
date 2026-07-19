import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemname: props.itemname,
      price: props.price
    };
  }

  render() {
    return (
      <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
        <p><strong>Item:</strong> {this.state.itemname}</p>
        <p><strong>Price:</strong> ₹{this.state.price}</p>
      </div>
    );
  }
}

export default Cart;
