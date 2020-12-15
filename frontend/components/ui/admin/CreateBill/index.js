import BoxContainer from '../../shared/BoxContainer'
import GroupInput from '../../shared/GroupInput'

import createBillStyles from './createBill.module.css'

export default function CreateBillUI(props) {
    return (
        <BoxContainer>
            <h2>Create bill</h2>

            <GroupInput 
                controllers={{
                    showEditButton: false,
                    isValueReadOnly: false
                }}
                data={{
                    label: 'Bill description',
                    inputValue: props.data.billDescription 
                }}
                actions={{
                    onSetInputValue: props.actions.onSetBillDescription
                }}
            />

            <div>
                <label>Date Limit to pay</label>
                <div>Date picker</div>
            </div>

            <GroupInput 
                controllers={{
                    showEditButton: false,
                    isValueReadOnly: false
                }}
                data={{
                    label: 'Amount money',
                    inputValue: props.data.amountMoney 
                }}
                actions={{
                    onSetInputValue: props.actions.onSetAmountMoney
                }}
            />

            <GroupInput 
                controllers={{
                    showEditButton: false,
                    isValueReadOnly: false
                }}
                data={{
                    label: 'Amount diamond',
                    inputValue: props.data.amountMoney 
                }}
                actions={{
                    onSetInputValue: props.actions.onSetAmountMoney
                }}
            />
            
            <div className={createBillStyles.groupInput}>
                <label>For who?</label>
                <div className={createBillStyles.groupInputEdit}>
                    <select className={createBillStyles.input} name="type" disabled={props.controllers.isTypeEarningReadOnly}>
                        <option value="weak">Iris</option>
                    </select>
                    <div className={createBillStyles.editButton} onClick={() => props.actions.onHandlerToggleEdit("typeEarning")}>📝</div>
                </div>
            </div>


        </BoxContainer>
    )
}