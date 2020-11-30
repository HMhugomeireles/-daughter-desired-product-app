//import SearchForm from '../shared/SearchForm'
//import SearchForm from '../shared/SearchList'
import searchUiStyles from './searchui.module.css'

export default function SearchUI(props) {
    return (
        <>
            <section>
                
                <section className={searchUiStyles.sectionInput}>
                    <input name="search" placeholder="What search" value={props.form.input} onChange={props.searchForm.onChange} />
                    <span>🔎</span>
                </section>

                <section className={searchUiStyles.sectionSearchList}>
                    <div className={searchUiStyles.sectionSearchListWrapper}>
                        {props.searchResults === null ||
                            props.searchResults.length === 0 
                            ? (<div className={searchUiStyles.sectionSearchListMessage}>Don't have result to show!</div>)
                            : (
                                <>
                                    <h3>Search Results</h3>
                                    <div className={searchUiStyles.sectionSearchListContainer}>
                                        {props.searchResults.map(item => (
                                            <div className={searchUiStyles.sectionSearchListItem}>
                                                <div
                                                    className={`${searchUiStyles.itemSave} ${(item.itemSaved && searchUiStyles.itemPined)}`} 
                                                    onClick={() => props.action.onSave(item.id)}
                                                >📌</div>
                                                <img src={item.img} />
                                                <div className={searchUiStyles.sectionSearchListItemPrice}>
                                                    <span className={searchUiStyles.itemPriceMoney}>{item.moneyValue}</span>
                                                    <span className={searchUiStyles.itemPriceDaimon}>{item.daimonValue}</span>
                                                </div>
                                                <div className={searchUiStyles.sectionSearchListItemTitle}>{item.title}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )
                        }
                    </div>
                </section>

            </section>
            {/* <SearchForm inputValue={props.inputValue} />
            <SearchList list={props.searchList} /> */}
        </>
    )
}