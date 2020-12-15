import groupInputStyles from './groupInput.module.css'

export default function GroupInput(props) {
    return (
        <div className={groupInputStyles.groupInput}>
            <label>{props.data.label}</label>
            <div className={groupInputStyles.groupInputEdit}>
                {Boolean(props.controllers.showEditButton) && (
                    <div className={groupInputStyles.editButton} onClick={props.actions.onEdit}>📝</div>
                )}
                <input
                    readOnly={props.controllers.isValueReadOnly} 
                    className={groupInputStyles.input} 
                    type="text" 
                    name="value" 
                    value={props.data.inputValue} 
                    onChange={props.actions.onSetInputValue} />
            </div>
        </div>
    )
}