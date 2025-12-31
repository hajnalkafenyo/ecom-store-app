import { OverviewItem } from './components/OverviewItem';
import { useCart } from './cartContext';

export function CheckoutSuccess() {
  const { cartItems } = useCart();
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Thank you for shopping with us!</h1>
      <img src="./checkout.png" alt="Checkout success" />
      <div>
        {cartItems.map((item) => {
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
