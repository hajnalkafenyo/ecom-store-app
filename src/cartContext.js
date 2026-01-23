import { createContext, useContext, useState } from 'react';

function getInitialCart() {
    if (!localStorage.getItem("cart")) {
        return []
    }

    const result = JSON.parse(localStorage.getItem("cart"))
    return result
}

export const CartContext = createContext({
    cartItems: [],
    addCartItem: (item) => { }
})

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getInitialCart())

    function addCartItem(item) {
        //TODO: Don't let adding the same item (by id) twice
        const newItem = { ...item, amount: 1 }
        if (cartItems.find(e => e.id === item.id)) {
            return false;

        }
        const newCartItems = [...cartItems, newItem]
        setCartItems(newCartItems)
        localStorage.setItem("cart", JSON.stringify(newCartItems));
    }

    function emptyCart() {
        setCartItems([])
        localStorage.removeItem("cart")
    }


    function increaseAmount(id) {
        const item = cartItems.find((i) => i.id === id)
        if (!item) {
            return
        }
        const currentAmount = item.amount
        const newAmount = currentAmount + 1
        const newList = [...cartItems]
        const newIndex = newList.findIndex((i) => i.id === id)
        newList[newIndex].amount = newAmount
        setCartItems(newList)
        localStorage.setItem("cart", JSON.stringify(newList));
    }

    function decreaseAmount(id) {
        const item = cartItems.find((i) => i.id === id)
        if (!item) {
            return
        }
        const currentAmount = item.amount
        const newAmount = currentAmount - 1
        if (newAmount <= 0) {
            const filteredList = cartItems.filter(i => i.id !== id)
            setCartItems(filteredList)
            return
        }
        const newList = [...cartItems]
        const newIndex = newList.findIndex((i) => i.id === id)
        newList[newIndex].amount = newAmount
        setCartItems(newList)
        localStorage.setItem("cart", JSON.stringify(newList));
    }

    function getCartSum() {
        let amount = 0

        for (let i = 0; i < cartItems.length; i++) {
            const element = cartItems[i];
            amount = amount + element.discountedPrice * element.amount
        }
        return amount
    }


    function getCartDifference() {
        let amountKr = 0
        for (let i = 0; i < cartItems.length; i++) {
            const element = cartItems[i];
            amountKr += (element.price - element.discountedPrice) * element.amount

        }
        return amountKr
    }

    return <CartContext.Provider value={{
        cartItems,
        addCartItem,
        emptyCart,
        increaseAmount,
        decreaseAmount,
        getCartSum,
        getCartDifference
    }}>
        {children}
    </CartContext.Provider>
}
