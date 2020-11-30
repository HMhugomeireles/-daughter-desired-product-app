import boxStyle from './boxinfo.module.css'

export default function BoxInfo(props) {
    return (
        <div className={`${boxStyle.container} ${boxStyle[props.type]} ${boxStyle[props.size]}`}>
            {props.children}
        </div>
    )
}