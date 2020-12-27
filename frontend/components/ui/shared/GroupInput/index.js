import { forwardRef } from 'react'
import groupInputStyles from './groupInput.module.css'

function GroupInput(props, ref) {
    return (
        <div className={groupInputStyles.groupInput}>
            <label>{props.data.label}</label>
            <div className={groupInputStyles.groupInputEdit}>
                {Boolean(props.controllers.showEditButton) && (
                    <div className={groupInputStyles.editButton} onClick={props.actions.onEdit}>📝</div>
                )}
                <input
                    ref={ref}
                    readOnly={props.controllers.isValueReadOnly} 
                    className={groupInputStyles.input}
                    name={props.data.name} 
                    />
            </div>
        </div>
    )
}

export default forwardRef(GroupInput)