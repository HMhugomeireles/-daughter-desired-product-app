import { useState } from 'react'

import TopNavigationUI from '../../ui/layout/TopNavigation'
import { useShoppingCart } from '../../../context/shoppingCart';

import { mockUserDetails } from '../../../mock/user'

export default function TopNavigation() {
    const [showNotification, setShowNotification] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    const {
        data: {
            shoppingCart,
            resumeShoppingCart
        },
        actions: {
            removeItemToShoppingCart
        }
    } = useShoppingCart()


    function handlerTogglerNotification() {
        setShowNotification(!showNotification)
        setShowShoppingCart(false)
    }

    function handlerTogglerShoppingCart() {
        setShowShoppingCart(!showShoppingCart)
        setShowNotification(false)
    }

    return <TopNavigationUI
                controllers={{
                    showNotification,
                    showShoppingCart
                }}
                data={{
                    userDetails: mockUserDetails,
                    shoppingCart,
                    resumeShoppingCart
                }}
                actions={{
                    handlerTogglerNotification,
                    handlerTogglerShoppingCart,
                    removeItemToShoppingCart
                }}/>
}