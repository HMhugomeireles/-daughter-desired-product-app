import layoutStyles from './layout.module.css'

export default function LayoutUI(props) {

    return (
        <section className={layoutStyles.container}>
            { props.children }
        </section>
    )
}