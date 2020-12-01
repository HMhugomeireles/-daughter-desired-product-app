import FilterOptionsUI from '../../ui/FilterOptions'
import ListItems from '../../ui/shared/ListItems'

import { mockSearchProduct } from '../../../mock/products'

export default function WishListContainer(props) {

    function onPine(id) {

    }

    return (
        <>
            <FilterOptionsUI />
            <ListItems 
                list={mockSearchProduct} 
                action={{ onSave: onPine }} 
            />
        </>
    )
}