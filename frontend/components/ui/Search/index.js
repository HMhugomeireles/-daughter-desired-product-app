import ListItemsUi from '../shared/ListItems'
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
                                    <ListItemsUi 
                                        list={props.searchResults}
                                        action={{onSave: props.actions.onSave}}/>
                                </>
                            )
                        }
                    </div>
                </section>

            </section>
        </>
    )
}