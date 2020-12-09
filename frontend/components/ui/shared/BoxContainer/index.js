import boxContainerStyles from './boxContainer.module.css'

export default function BoxContainer(props) {
    return <div className={boxContainerStyles.container}>{props.children}</div>
}