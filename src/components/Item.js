import React, { useState } from "react";

function Item({ name, category }) {
  const [message, setMessage] = useState(false);
  const cartMessage = message ? 'Remove From Cart' : 'Add to Cart';
  const classCart = message ? 'in-cart' : "";

  const cartStatus = () => {
    setMessage(!message);
  };

  return (
    <li className={classCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartStatus}>
        {cartMessage}
      </button>
    </li>
  );
}

export default Item;
