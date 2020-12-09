import buttonStyles from './button.module.css'

export default function Button(props) {
return <button className={`${buttonStyles.container} ${buttonStyles[props.type]}`} {...props}>{props.children}</button>
}