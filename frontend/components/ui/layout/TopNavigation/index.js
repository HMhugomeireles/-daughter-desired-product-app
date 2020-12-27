import topStyles from './top.module.css'


export default function header(props) {
    return (
        <>
            <header className={topStyles.header}>

                <div className={topStyles.logo}>
                    <span className={topStyles.logo1}>Brand</span>
                    <span className={topStyles.logo2}>app</span>
                </div>

                <div className={topStyles.userContainer}>
                    <img className={topStyles.avatar} src={props.data.userDetails.avatar} />
                    <div className={topStyles.username}>{props.data.userDetails.username}</div>
                    <div 
                        className={topStyles.notification}
                        onClick={props.actions.handlerTogglerNotification}>🔔</div>
                    <div 
                        className={topStyles.cart}
                        onClick={props.actions.handlerTogglerShoppingCart}>🛒</div>
                </div>

            </header>

            {Boolean(props.controllers.showNotification) && (
                <div className={topStyles.notificationSection}>
                    <div className={topStyles.notificationNaN}>You don't have notifications </div>
                </div>
            )}

            {Boolean(props.controllers.showShoppingCart) && (
                <div className={topStyles.shoppingCartSection}>
                    {Boolean(props.data.shoppingCart.length === 0) && (
                        <div className={topStyles.notificationNaN}>Shopping cart empty</div>
                    )}
                    {Boolean(props.data.shoppingCart.length !== 0) && (
                        <>
                            {console.log(props.data.shoppingCart)}
                            {props.data.shoppingCart.map(item => (
                                <div key={`cart-${item.id}`}>
                                    <div>{item.title}</div>
                                    <div>{item.moneyValue}💵</div>
                                    <div>{item.daimonValue}💎</div>
                                </div>
                            ))}
                            <div className={topStyles.shoppingCartSectionFooter}>
                                <span>Total</span>
                                <span>💵{props.data.resumeShoppingCart.totalMoney}</span>
                                <span>💎{props.data.resumeShoppingCart.totalDiamond}</span>
                            </div>               
                        </>
                    )}
                </div>
            )}

        </>
    )
}