import FilterOptionsUI from '../../ui/FilterOptions'
import ListItems from '../../ui/shared/ListItems'
import { useShoppingCart } from '../../../context/shoppingCart'

import { mockSearchProduct } from '../../../mock/products'

export default function WishListContainer(props) {
    const { actions } = useShoppingCart()

    function onSave(id) {

    }

    function onBuy(id) {

    }

    return (
        <>
            <FilterOptionsUI />
            <ListItems
                controllers={{
                    showButtonBuy: true,
                }}
                data={{
                    list: mockSearchProduct,
                    wallet: {
                        money: 200,
                        diamond: 300
                    }
                }} 
                actions={{
                    onSave,
                    onBuy: actions.addItemToShoppingCart
                }} 
            />
        </>
    )
}