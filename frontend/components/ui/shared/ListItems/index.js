import UIError from '../UIError'
import listItemsStyles from './listItemsUi.module.css'


export default function ListItemsUi(props) {
    return (
        <>
            {!Boolean(props.list) && <UIError message="List component can't render null list" />}
            {Boolean(props.list) && (
                <div className={listItemsStyles.sectionSearchListContainer}>
                    {props.list.map(item => (
                        <div className={listItemsStyles.sectionSearchListItem}>
                            <div
                                className={`${listItemsStyles.itemSave} ${(item.itemSaved && listItemsStyles.itemPined)}`} 
                                onClick={() => props.action.onSave(item.id)}
                            >📌</div>
                            <img src={item.img} />
                            <div className={listItemsStyles.sectionSearchListItemPrice}>
                                <span className={listItemsStyles.itemPriceMoney}>{item.moneyValue}</span>
                                <span className={listItemsStyles.itemPriceDaimon}>{item.daimonValue}</span>
                            </div>
                            <div className={listItemsStyles.sectionSearchListItemTitle}>{item.title}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}