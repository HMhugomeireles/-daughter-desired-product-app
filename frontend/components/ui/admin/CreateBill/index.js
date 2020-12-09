import BoxContainer from '../../shared/BoxContainer'
import createBillStyles from './createBill.module.css'

export default function CreateBillUI(props) {
    return (
        <BoxContainer>
            <div>
                <label>Bill description</label>
                <input type="text" />
            </div>
            <div>
                <label>Date Limit to pay</label>
                <div>Date picker</div>
            </div>
            <div>
                <label>Amount money</label>
                <input type="text" />
            </div>
            <div>
                <label>Amount diamond</label>
                <input type="text" />
            </div>
            <div>
                <label>For who?</label>
                <input type="text" />
            </div>
        </BoxContainer>
    )
}