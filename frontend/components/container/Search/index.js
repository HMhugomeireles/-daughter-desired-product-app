import { useState } from 'react';
import SearchUI from '../../ui/Search'

import { mockSearchProduct } from '../../../mock/products'

export default function Search() {
    const [searchInput, setSearchInput] = useState({input: ""});

    function onChange(e) {
        setSearchInput({ input: e.target.value})
    }

    function onSave(id) {
        console.log("onSave", id)
    }

    return <SearchUI 
                form={searchInput}
                searchForm={{
                    onChange
                }}
                actions={{
                    onSave
                }}
                searchResults={mockSearchProduct}/>

}