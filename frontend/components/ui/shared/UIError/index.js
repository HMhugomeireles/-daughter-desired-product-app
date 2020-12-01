import UIErrorStyles from './uierror.module.css'

export default function UIError(props) {
    return(
        <div className={UIErrorStyles.container}>
            {props.message}
        </div>
    )
}