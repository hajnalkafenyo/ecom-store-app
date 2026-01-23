import { OverviewItem } from './components/OverviewItem';
import { LinkButton } from './components/link';
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
      <h1>The order was successful! Thank you for shopping with us!</h1>
      <img src="./checkout.png" alt="Checkout success" />
      <LinkButton variant="secondary" to="/">
        Back to home{' '}
        <img
          src="/home.svg"
          height="16px"
          width="16px"
          alt="home"
          className="inline"
        />{' '}
      </LinkButton>
      <div className="flex flex-col gap-4">
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
