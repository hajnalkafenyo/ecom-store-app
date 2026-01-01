import { OverviewItem } from './components/OverviewItem';
import { useCart } from './cartContext';
import { useState, useEffect } from 'react';

export function CheckoutSuccess() {
  const { cartItems, emptyCart } = useCart();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setItems(cartItems);
      emptyCart();
    }
  }, [cartItems, emptyCart]);

  return (
    <div className="flex flex-col items-stretch md:items-center gap-2">
      <h1>Thank you for shopping with us!</h1>
      <img src="./checkout.png" alt="Checkout success" />
      <div>
        {items.map((item) => {
          return (
            <OverviewItem
              title={item.title}
              image={item.image.url}
              price={item.price}
              discountedPrice={item.discountedPrice}
            />
          );
        })}
      </div>
    </div>
  );
}
