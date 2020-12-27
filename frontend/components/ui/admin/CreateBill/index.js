import ReactSelect from "react-select";
import { useForm, Controller } from 'react-hook-form'
import BoxContainer from '../../shared/BoxContainer'
import GroupInput from '../../shared/GroupInput'

import createBillStyles from './createBill.module.css'

export default function CreateBillUI(props) {
    const {register, handleSubmit, control} = useForm()

    function onSubmitForm(data, event) {
        event.target.reset()
        props.actions.onSubmitBill(data)
    }

    return (
        <BoxContainer>
            <h2>Create bill</h2>

            <form id="create-bill-form" onSubmit={handleSubmit(onSubmitForm)}>
                <GroupInput
                    ref={register}
                    controllers={{
                        showEditButton: false,
                        isValueReadOnly: false
                    }}
                    data={{
                        label: 'Bill description',
                        name: 'billDescription',
                    }}
                />

                <GroupInput 
                    ref={register}
                    controllers={{
                        showEditButton: false,
                        isValueReadOnly: false,
                    }}
                    data={{
                        label: 'Date Limit to pay',
                        name: 'dateLimitPay',
                    }}
                />

                <GroupInput 
                    ref={register}
                    controllers={{
                        showEditButton: false,
                        isValueReadOnly: false
                    }}
                    data={{
                        label: 'Amount money',
                        name: 'amountMoney',
                    }}
                />

                <GroupInput 
                    ref={register}
                    controllers={{
                        showEditButton: false,
                        isValueReadOnly: false
                    }}
                    data={{
                        label: 'Amount diamond',
                        name: 'amountDiamond',
                    }}
                />
                
                <div className={createBillStyles.groupInput}>
                    <label>For who?</label>
                    <Controller
                        render={(props) => (
                            <ReactSelect 
                                classNamePrefix={createBillStyles.selectBox}
                                //defaultValue={{ value: 'iris', label: 'Íris' }}
                                onChange={props.onChange}
                                options={[
                                    { value: 'iris', label: 'Íris' }
                                ]}
                            />
                        )}
                        name="person"
                        control={control}
                        rules={{ required: true }}
                    />
                </div>
            </form>
            
            <button value="submit" type="submit" form="create-bill-form">Insert</button>

        </BoxContainer>
    )
}