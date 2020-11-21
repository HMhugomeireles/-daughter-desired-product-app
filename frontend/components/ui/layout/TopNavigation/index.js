import topStyles from './top.module.css'


export default function header({ avatar, username, onSettings }) {
    return (
        <header className={topStyles.header}>

            <div className={topStyles.logo}>
                <span className={topStyles.logo1}>Brand</span>
                <span className={topStyles.logo2}>app</span>
            </div>

            <div className={topStyles.userContainer}>
                <div className={topStyles.avatar}></div>
                <div className={topStyles.username}>User Name</div>
                <div onClick={onSettings} className={topStyles.settings}>Settings</div>
            </div>

        </header>
    )
}