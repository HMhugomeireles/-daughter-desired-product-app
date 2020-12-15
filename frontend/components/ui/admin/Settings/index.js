import Button from '../../shared/button'
import GroupInput from '../../shared/GroupInput'
import settingsStyles from './settings.module.css'

export default function SettingsUI(props) {
    return (
        <section className={settingsStyles.container}>
            <h2>Settings</h2>

            <GroupInput 
                controllers={{
                    showEditButton: true,
                    isValueReadOnly: props.controllers.isValueEarnReadOnly
                }}
                data={{
                    label: 'Define value will earn',
                    inputValue: props.data.valueEarn
                }}
                actions={{
                    onEdit: () => props.actions.onHandlerToggleEdit("valueEarn"),
                    onSetInputValue: props.actions.onSetBillDescription
                }}
            />
            {props.controllers.showValueEarn && (
                <div className={settingsStyles.editButtonOptions}>
                    <Button onClick={props.actions.onSave} type="save">Save</Button>
                    <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                </div>
            )}
            
            <div className={settingsStyles.groupInput}>
                <label>Select type of earning</label>
                <div className={settingsStyles.groupInputEdit}>
                    <select className={settingsStyles.input} name="type" disabled={props.controllers.isTypeEarningReadOnly}>
                        <option value="weak">Weak</option>
                        <option value="mount">Mount</option>
                    </select>
                    <div className={settingsStyles.editButton} onClick={() => props.actions.onHandlerToggleEdit("typeEarning")}>📝</div>
                </div>
            </div>
            {props.controllers.showTypeEarning && (
                <div className={settingsStyles.editButtonOptions}>
                    <Button onClick={props.actions.onSave} type="save">Save</Button>
                    <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                </div>
            )}

            <GroupInput 
                controllers={{
                    showEditButton: true,
                    isValueReadOnly: props.controllers.isNotificationEmailReadOnly
                }}
                data={{
                    label: 'Notification email',
                    inputValue: props.data.email
                }}
                actions={{
                    onEdit: () => props.actions.onHandlerToggleEdit("notificationEmail"),
                    onSetInputValue: props.actions.onSetEmail
                }}
            />
            {props.controllers.showNotificationEmail && (
                <div className={settingsStyles.editButtonOptions}>
                    <Button onClick={props.actions.onSave} type="save">Save</Button>
                    <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                </div>
            )}

            <GroupInput 
                controllers={{
                    showEditButton: true,
                    isValueReadOnly: props.controllers.isPercentageToBuyReadOnly
                }}
                data={{
                    label: 'Percentage allow to request buy',
                    inputValue: props.data.allowPercentageBuy
                }}
                actions={{
                    onEdit: () => props.actions.onHandlerToggleEdit("percentageToBuy"),
                    onSetInputValue: props.actions.onSetAllowPercentageBuy
                }}
            />
            {props.controllers.showPercentageToBuy && (
                <div className={settingsStyles.editButtonOptions}>
                    <Button onClick={props.actions.onSave} type="save">Save</Button>
                    <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                </div>
            )}

            <GroupInput 
                controllers={{
                    showEditButton: true,
                    isValueReadOnly: props.controllers.isSendInviteReadOnly
                }}
                data={{
                    label: 'Invite to group by email',
                    inputValue: props.data.sendInvite
                }}
                actions={{
                    onEdit: () => props.actions.onHandlerToggleEdit("sendInvite"),
                    onSetInputValue: props.actions.onSetSendInvite
                }}
            />
            {props.controllers.showSendInvite && (
                <div className={settingsStyles.editButtonOptions}>
                    <Button onClick={props.actions.onSave} type="save">Save</Button>
                    <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                </div>
            )}

        </section>
    )
}