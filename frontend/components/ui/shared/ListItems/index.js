import UIError from '../UIError'
import listItemsStyles from './listItemsUi.module.css'


export default function ListItemsUi(props) {
    return (
        <>
            {!Boolean(props.data.list) && <UIError message="List component can't render null list" />}
            {Boolean(props.data.list) && (
                <div className={listItemsStyles.sectionSearchListContainer}>
                    {props.data.list.map(item => (
                        <div key={`shoppingCart-${item.id}`} className={listItemsStyles.sectionSearchListItem}>
                            <div
                                className={`${listItemsStyles.itemSave} ${(item.itemSaved && listItemsStyles.itemPined)}`} 
                                onClick={() => props.actions.onSave(item.id)}
                            >📌</div>
                            <img src={item.img} />
                            <div className={listItemsStyles.sectionSearchListItemPrice}>
                                <span className={listItemsStyles.itemPriceMoney}>{item.moneyValue}</span>
                                <span className={listItemsStyles.itemPriceDaimon}>{item.diamondValue}</span>
                            </div>
                            <div className={listItemsStyles.sectionSearchListItemTitle}>{item.title}</div>
                            {props.controllers.showButtonBuy && (
                                <button
                                    disabled={item.canBuy}
                                    onClick={() => props.actions.onBuy(item.id)} 
                                    className={`${listItemsStyles.buyButton} ${item.canBuy ? listItemsStyles.cursorNot : listItemsStyles.cursorPointer}`}>Buy</button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}