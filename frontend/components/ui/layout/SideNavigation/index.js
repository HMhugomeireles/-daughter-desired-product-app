import sideStyles from './side.module.css'


export default function SideNavigationUI() {
    return (
        <nav className={sideStyles.navigation}>

            <div>Search</div>
            <div>Wish Products</div>
            <div>Wallet</div>
            
        </nav>
    )
}