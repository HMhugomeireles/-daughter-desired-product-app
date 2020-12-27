import { useState } from 'react';
import { searchProduct } from '../../../services/Products'
import SearchUI from '../../ui/Search'

export default function Search() {
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(undefined);
    const [loading, setLoading] = useState(false);


    function onSave(id) {
        console.log("onSave", id)
    }

    function handleProductSearch() {
        setLoading(true)
        searchProduct(searchInput)
            .then(results => {
                console.log("Results", results)
                if(results.success) {
                    setProducts(results.products)        
                }
                setLoading(false)
            })
            .catch(err => setErrors(err.message))
    }

    function handleKeyPress(e) {
        if (e.code === 'Enter') {
            handleProductSearch()
        }
    }

    return (
        <>
            {Boolean(errors) && <h2>{errors}</h2>}
            <SearchUI
                controllers={{
                    loading
                }}
                data={{
                    searchResults: products,
                    searchInput
                }}
                actions={{
                    onSave,
                    onSetInputValue: (e) => setSearchInput(e.target.value), 
                    onSearch: (e) => handleProductSearch,
                    onKeyPress: handleKeyPress
                }}
            />
        </>
    )
}
