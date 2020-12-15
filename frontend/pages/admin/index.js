import Layout from '../../components/container/layout';
import Settings from '../../components/container/admin/Settings';
import CreateBill from '../../components/container/admin/CreateBill';

import adminStyles from '../../styles/pages/admin.module.css'

export default function admin() {
  
    return (
        <Layout>
            <div className={adminStyles.container}>
                <Settings />
                <CreateBill />
            </div>

            <div>admin</div>
            
            
            <div>
                month/weak - earnings
                amount
                only can buy things when they have 100€ can spend 40€
            </div>

            <div>
                invite by email
                list of children
            </div>

            <div>
                management daimons
                insert daimons (test, good behavior)
                create the bill
                tax buy
            </div>

            <div>
                management money
                insert task and value
            </div>

            <div>
                insert product she can buy like (movie/travel/)
            </div>


        </Layout>
    )
}