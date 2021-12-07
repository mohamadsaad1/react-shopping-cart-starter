import React from 'react';


function MyShoppingCart(props) {

  let things = props.cart.map((ele, i) => {
    return (
      <li onClick={() => props.handleClick(i)}>
        {ele.name} {ele.price}
      </li>
    );
  });

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>
        {things}
      </ul>
    </div>
  );
}

export default MyShoppingCart;
