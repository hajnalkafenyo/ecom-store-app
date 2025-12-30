import { Link } from "react-router-dom";
import { useCart } from "./cartContext";
import { Button } from "./components/button";
import { CartItem } from "./components/cartItem";

export function CartPage() {

    const { cartItems, getCartSum, emptyCart } = useCart()

    if (!cartItems.length) {
        return <Link to="/" ><img src="emptyCart.png" alt="Empty Cart" /></Link>
    } else {



        return <div className="bg-gray-50 p-2">
            <div>
                {cartItems.map((item) => {
                    return <CartItem id={item.id} title={item.title} description={item.description} image={item.image.url} price={item.price} discountedPrice={item.discountedPrice} />
                })}
            </div>
            <div className="border border-gray-300 rounded-md flex items-end flex-col gap-2 m-2 p-2 w-full bg-gray-50">
                <div className="text-right font-semibold text-lg text-gray-800">{getCartSum()} Kr</div>
                <Link to="/checkout-success">
                    <Button onClick={() => {
                        emptyCart()
                    }} variant="secondary">Buy now</Button>
                </Link>
            </div>
        </div>
    }
}