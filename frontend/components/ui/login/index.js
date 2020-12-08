import loginStyles from './login.module.css'

import Link from 'next/link'

export default function LoginUI({ onLoginProvider }) {

    return (

        <section className={loginStyles.container}>
            <section className={loginStyles.wrapper}>
            
                <section className={loginStyles.loginImgSection}></section>
                
                <section className={loginStyles.loginSignInSection}>

                    <div className={loginStyles.logo}>
                        <span className={loginStyles.logo1}>Brand</span>
                        <span className={loginStyles.logo2}>app</span>
                    </div>

                    <h3>Sign In</h3>

                    <div className={loginStyles.groupInput}>
                        <label>Group ID</label>
                        <input id="groupId" name="groupId" placeholder="Code Group" />
                    </div>

                    <div className={loginStyles.groupBtn}>
                        <Link href="/dashboard">
                            <button onClick={() => onLoginProvider('google')}>Sign in with Google</button>
                        </Link>
                    </div>

                </section>
            
            </section>   
        </section>
    )
}