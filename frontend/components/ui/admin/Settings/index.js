import Button from '../../shared/button'
import settingsStyles from './settings.module.css'

export default function SettingsUI(props) {
    return (
        <section className={settingsStyles.container}>
            <h2>Settings</h2>

            <div className={settingsStyles.groupInput}>
                <label>Define value will earn</label>
                <div className={settingsStyles.groupInputEdit}>
                    <div className={settingsStyles.editButton} onClick={() => props.actions.onHandlerToggleEdit("valueEarn")}>📝</div>
                    <input
                        readOnly={props.controllers.isValueEarnReadOnly} 
                        className={settingsStyles.input} 
                        type="text" 
                        name="value" 
                        value={props.controllers.valueEarn} 
                        onChange={props.actions.onSetValueEarn} />
                </div>
                {props.controllers.showValueEarn && (
                    <div className={settingsStyles.editButtonOptions}>
                        <Button onClick={props.actions.onSave} type="save">Save</Button>
                        <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                    </div>
                )}
            </div>
            
            <div className={settingsStyles.groupInput}>
                <label>Select type of earning</label>
                <div className={settingsStyles.groupInputEdit}>
                    <select className={settingsStyles.input} name="type" disabled={props.controllers.isTypeEarningReadOnly}>
                        <option value="weak">Weak</option>
                        <option value="mount">Mount</option>
                    </select>
                    <div className={settingsStyles.editButton} onClick={() => props.actions.onHandlerToggleEdit("typeEarning")}>📝</div>
                </div>
                {props.controllers.showTypeEarning && (
                    <div className={settingsStyles.editButtonOptions}>
                        <Button onClick={props.actions.onSave} type="save">Save</Button>
                        <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                    </div>
                )}
            </div>

            <div className={settingsStyles.groupInput}>
                <label>Notification email</label>
                <div className={settingsStyles.groupInputEdit}>
                    <input
                        readOnly={props.controllers.isNotificationEmailReadOnly} 
                        className={settingsStyles.input} 
                        type="text" 
                        name="email" 
                        value={props.controllers.email} 
                        onChange={props.actions.onSetEmail} />
                    <div className={settingsStyles.editButton} onClick={() => props.actions.onHandlerToggleEdit("notificationEmail")}>📝</div>
                </div>
                {props.controllers.showNotificationEmail && (
                    <div className={settingsStyles.editButtonOptions}>
                        <Button onClick={props.actions.onSave} type="save">Save</Button>
                        <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                    </div>
                )}
            </div>

            <div className={settingsStyles.groupInput}>
                <label>Percentage allow to request buy</label>
                <div className={settingsStyles.groupInputEdit}>
                    <input 
                        readOnly={props.controllers.isPercentageToBuyReadOnly}
                        className={settingsStyles.input} 
                        type="text" 
                        name="allowPercentageBuy" 
                        value={props.controllers.allowPercentageBuy} 
                        onChange={props.actions.onSetAllowPercentageBuy} />
                    <div className={settingsStyles.editButton} onClick={() => props.actions.onHandlerToggleEdit("percentageToBuy")}>📝</div>
                </div>
                {props.controllers.showPercentageToBuy && (
                    <div className={settingsStyles.editButtonOptions}>
                        <Button onClick={props.actions.onSave} type="save">Save</Button>
                        <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                    </div>
                )}
            </div>

            <div className={settingsStyles.groupInput}>
                <label>Invite to group by email</label>
                <div className={settingsStyles.groupInputEdit}>
                    <input 
                        readOnly={props.controllers.isSendInviteReadOnly}
                        className={settingsStyles.input} 
                        type="text" 
                        name="sendInvite" 
                        value={props.controllers.sendInvite} 
                        onChange={props.actions.onSetSendInvite} />
                    <div className={settingsStyles.editButton} onClick={() => props.actions.onHandlerToggleEdit("sendInvite")}>📝</div>
                </div>
                {props.controllers.showSendInvite && (
                    <div className={settingsStyles.editButtonOptions}>
                        <Button onClick={props.actions.onSave} type="save">Save</Button>
                        <Button onClick={props.actions.onCancel} type="cancel">Cancel</Button>
                    </div>
                )}
            </div>

        </section>
    )
}