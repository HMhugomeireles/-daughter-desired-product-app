import mainStyles from './content.module.css'

export default function ContentUI({ children }) {
    return (
        <main className={mainStyles.container}>
            { children }
        </main>
    )
}