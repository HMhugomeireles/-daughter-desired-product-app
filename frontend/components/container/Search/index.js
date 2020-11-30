import { useState } from 'react';
import SearchUI from '../../ui/Search'


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
                searchResults={[
                    {
                        id: "1234",
                        img: "https://lh3.googleusercontent.com/02FSKuXcJfzS1mxhLIFfYOJPPJda5Qe2aF6RTP0hurMEKsrnR99MbVg0a4rCi32EkfJY9EWRDtMEFXcymGC87vsC",
                        title: "Minecraft 2",
                        moneyValue: "30.00€",
                        daimonValue: "400💎",
                        itemSaved: true
                    },
                    {
                        id: "1236",
                        img: "https://lh3.googleusercontent.com/02FSKuXcJfzS1mxhLIFfYOJPPJda5Qe2aF6RTP0hurMEKsrnR99MbVg0a4rCi32EkfJY9EWRDtMEFXcymGC87vsC",
                        title: "Minecraft 2",
                        moneyValue: "30.00€",
                        daimonValue: "400💎",
                        itemSaved: false
                    },
                    {
                        id: "1234",
                        img: "https://lh3.googleusercontent.com/02FSKuXcJfzS1mxhLIFfYOJPPJda5Qe2aF6RTP0hurMEKsrnR99MbVg0a4rCi32EkfJY9EWRDtMEFXcymGC87vsC",
                        title: "Minecraft 2",
                        moneyValue: "30.00€",
                        daimonValue: "400💎",
                        itemSaved: true
                    },
                    {
                        id: "1236",
                        img: "https://lh3.googleusercontent.com/02FSKuXcJfzS1mxhLIFfYOJPPJda5Qe2aF6RTP0hurMEKsrnR99MbVg0a4rCi32EkfJY9EWRDtMEFXcymGC87vsC",
                        title: "Minecraft 2",
                        moneyValue: "30.00€",
                        daimonValue: "400💎",
                        itemSaved: false
                    },
                ]}/>

}