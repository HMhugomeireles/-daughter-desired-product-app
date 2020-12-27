import ListItemsUi from '../shared/ListItems'
import searchUiStyles from './searchui.module.css'

export default function SearchUI(props) {
    return (
        <section>
            
            <section className={searchUiStyles.sectionInput}>
                <input 
                    name="search" 
                    placeholder="What search" 
                    value={props.data.searchInput.input} 
                    onChange={props.actions.onSetInputValue} 
                    onKeyUp={props.actions.onKeyPress}/>
                <span onClick={(e) => props.actions.onSearch}>🔎</span>
            </section>

            <section className={searchUiStyles.sectionSearchList}>
                <div className={searchUiStyles.sectionSearchListWrapper}>
                    {props.controllers.loading && <h2>Loading...</h2>}
                    {props.data.searchResults === undefined ||
                        props.data.searchResults.length === 0 
                        ? (<div className={searchUiStyles.sectionSearchListMessage}>Don't have result to show!</div>)
                        : (
                            <>
                                <h3>Search Results</h3>
                                <ListItemsUi
                                    controllers={{
                                        showButtonBuy: false
                                    }}
                                    data={{
                                        list: props.data.searchResults
                                    }}
                                    actions={{
                                        onSave: props.actions.onSave
                                    }}/>
                            </>
                        )
                    }
                </div>
            </section>

        </section>
    )
}