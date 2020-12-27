import { createContext, useContext, useState } from 'react'

import { mockSearchProduct } from '../../mock/products'

const ShoppingCartContext = createContext({})

export const useShoppingCart = () => useContext(ShoppingCartContext);

export function ShoppingCartContextProvider(props) {
    const [shoppingCart, setShoppingCart] = useState([]);


    function addItemToShoppingCart(id) {
        setShoppingCart([
            ...shoppingCart,
            mockSearchProduct.filter(i => i.id === id)
        ])
    }

    function removeItemToShoppingCart(id) {

    }

    return (
        <ShoppingCartContext.Provider value={{
            data: {
                shoppingCart,
                resumeShoppingCart: {
                    totalMoney: shoppingCart.reduce((total, currentValue) => total + currentValue.moneyValue, 0),
                    totalDiamond: shoppingCart.reduce((total, currentValue) => total + currentValue.diamondValue, 0)
                }
            },
            actions: {
                addItemToShoppingCart,
                removeItemToShoppingCart
            }
        }}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}
