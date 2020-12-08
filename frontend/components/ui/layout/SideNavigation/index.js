import Link from 'next/link'
import sideStyles from './side.module.css'


export default function SideNavigationUI() {
    return (
        <nav className={sideStyles.navigation}>
            <Link href="/admin">
                <div>Admin</div>
            </Link>

            <Link href="/dashboard/search">
                <div>🔎 Search</div>
            </Link>
            <Link href="/dashboard/wishList">
                <div>📑 Wish Products</div>
            </Link>
            <Link href="/dashboard/wallet">
                <div>Wallet</div>
            </Link>
            
        </nav>
    )
}