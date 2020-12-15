import { useState } from 'react'
import CreateBillUI from '../../../ui/admin/CreateBill'

export default function CreateBillContainer(props) {
    const [billDescription, setBillDescription] = useState('')
    const [amountMoney, setAmountMoney] = useState('')


    return <CreateBillUI
                controllers={{

                }}
                data={{
                    billDescription,
                    amountMoney
                }}
                actions={{
                    onSetBillDescription: (e) => setBillDescription(e.target.value),
                    onSetAmountMoney: (e) => setAmountMoney(e.target.value)
                }}
            />
}