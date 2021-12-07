import React from 'react';

function AllTheThings(props) {

  let things = props.products.map(ele => {
    return (
      <li onClick={() => props.handleClick(ele)}>
        {ele.name} - ${ele.price}
      </li>
    );
  });

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>
        {things}
      </ul>
    </div>
  );
}

export default AllTheThings;

