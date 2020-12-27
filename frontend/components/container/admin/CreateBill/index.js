import CreateBillUI from '../../../ui/admin/CreateBill'

export default function CreateBillContainer(props) {


    function onSubmitBill(data) {
        console.log("form", data)
    }


    return <CreateBillUI
                actions={{
                    onSubmitBill
                }}
            />
}