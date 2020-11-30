import BoxInfo from '../shared/BoxInfo'
import dashboardStyles from './dashboard.module.css'

export default function DashBoardUI() {

    return (
        <>

            <header className={dashboardStyles.headerInfo}>

                <BoxInfo type="primary" size="w50">
                    <div className={dashboardStyles.boxWrapper}>
                        <span className={dashboardStyles.boxIcon}>💰</span>
                        <h3>1000.00€</h3>
                        <span>Money Wallet</span>
                    </div>
                </BoxInfo>

                <BoxInfo type="secondary" size="w50">
                    <div className={dashboardStyles.boxWrapper}>
                        <span className={dashboardStyles.boxIcon}>💎</span>
                        <h3>5000</h3>
                        <span>Diamond Wallet</span>
                    </div>
                </BoxInfo>

            </header>

            <section className={dashboardStyles.main}>
                <h2>My Dashboard </h2>

                <section className={dashboardStyles.wishListSection}>
                    <h3 className={dashboardStyles.boxHeader}>Wish List</h3>
                    <ul>
                        <li className={dashboardStyles.wishListItem}>
                            <img src="https://lh3.googleusercontent.com/02FSKuXcJfzS1mxhLIFfYOJPPJda5Qe2aF6RTP0hurMEKsrnR99MbVg0a4rCi32EkfJY9EWRDtMEFXcymGC87vsC"/>
                            <div className={dashboardStyles.wishListItemInfo}>
                                <span>Minecraft</span>
                                <div>
                                    <span className={dashboardStyles.money}>💰 - 20€</span>
                                    <span className={dashboardStyles.diamond}>💎 - 400</span>
                                </div>
                            </div>
                        </li>
                        <li className={dashboardStyles.wishListItem}>
                            <img src="https://lh3.googleusercontent.com/02FSKuXcJfzS1mxhLIFfYOJPPJda5Qe2aF6RTP0hurMEKsrnR99MbVg0a4rCi32EkfJY9EWRDtMEFXcymGC87vsC"/>
                            <div className={dashboardStyles.wishListItemInfo}>
                                <span>Minecraft</span>
                                <div>
                                    <span className={dashboardStyles.money}>💰 - 20€</span>
                                    <span className={dashboardStyles.diamond}>💎 - 400</span>
                                </div>
                            </div>
                        </li>
                        <li className={dashboardStyles.wishListItem}>
                            <img src="https://lh3.googleusercontent.com/02FSKuXcJfzS1mxhLIFfYOJPPJda5Qe2aF6RTP0hurMEKsrnR99MbVg0a4rCi32EkfJY9EWRDtMEFXcymGC87vsC"/>
                            <div className={dashboardStyles.wishListItemInfo}>
                                <span>Minecraft</span>
                                <div>
                                    <span className={dashboardStyles.money}>💰 - 20€</span>
                                    <span className={dashboardStyles.diamond}>💎 - 400</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className={dashboardStyles.accountSection}>
                    <h3>Account</h3>
                    <div className={dashboardStyles.accountSectionWrapper}>
                        <div className={`${dashboardStyles.accountSectionMoney} ${dashboardStyles.money}`}>
                            <h4>Money💰</h4>
                            <ul className={dashboardStyles.accountSectionMoneyList}>
                                <li>2020/05/01 - Month income - +20€</li>
                                <li>2020/05/01 - Month income - +20€</li>
                                <li>2020/05/01 - Month income - +20€</li>
                                <li>2020/05/01 - Buy game  -20€</li>
                                <li>2020/05/01 - Bad behavior -2€</li>
                            </ul>
                        </div>

                        <div className={`${dashboardStyles.accountSectionDiamond} ${dashboardStyles.diamond}`}>
                            <h4>Diamond💎</h4>
                            <ul className={dashboardStyles.accountSectionDiamondList}>
                                <li>2020/05/01 - Test Math 80% - +80</li>
                                <li>2020/05/01 - Test Math 80% - +80</li>
                                <li>2020/05/01 - Bad behavior - -100</li>
                                <li>2020/05/01 - Test Math 80% - +80</li>
                            </ul>
                        </div>
                    </div>

                </section>

            </section>

        </>
    )
}