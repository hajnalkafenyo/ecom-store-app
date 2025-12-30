import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cartContext";

export function Header() {

  const { cartItems } = useCart()
  const itemsCount = cartItems.length

  return (
    <div className="flex flex-row justify-between border-b border-gray-300 p-2 bg-gray-50">
      <div>
        <Link to="/">
          <img src="leaf.png" alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact Us</Link>
      </div>
      <div>
        <Link to="/cart-page" className="relative">
          <img src="cart.png" alt="cart icon" />
          {!!itemsCount && <span className="text-xs bg-amber-500 text-white px-1 py-0 rounded-full absolute -right-2 -bottom-2">{itemsCount}</span>}
        </Link>
      </div>
    </div>
  );
}
