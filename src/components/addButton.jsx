import { useCart } from '../cartContext';

export function AddButton({ id }) {
  const { cartItems, increaseAmount, decreaseAmount } = useCart();
  const item = cartItems.find((cartItem) => cartItem.id === id);

  return (
    <div className="flex flex-row border border-gray-300 rounded-md bg-gray-50">
      <button
        className="rounded-md bg-gray-500 hover:bg-gray-600 text-white py-0,5 px-2"
        type="button"
        onClick={() => decreaseAmount(id)}
      >
        -{' '}
      </button>

      <div className="p-1 bg-gray-50">{item.amount}</div>
      <button
        className="rounded-md bg-amber-500 hover:bg-amber-600 text-white py-0,5 px-2"
        type="button"
        onClick={() => increaseAmount(id)}
      >
        +
      </button>
    </div>
  );
}
