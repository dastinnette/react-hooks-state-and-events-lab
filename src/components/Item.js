import React, { useState } from "react";

function Item({ name, category }) {
  // create state variable to track if item is in cart
  const [inCart, setInCart] = useState(false)
  // create class name for item to track if it is in the cart or not
  const itemClass = inCart ? "in-cart" : ""

  // create function to handle add or remove from cart on click
  function handleAddRemoveClick() {
    setInCart(!inCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddRemoveClick} className="add">
        { inCart ? "Remove from Cart" : "Add to Cart" }
      </button>
    </li>
  );
}

export default Item;
