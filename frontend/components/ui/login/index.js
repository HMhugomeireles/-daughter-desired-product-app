import loginStyles from './login.module.css'

export default function LoginUI({ onLoginProvider }) {

    return (
        <section className={loginStyles.container}>
            <div className={loginStyles.groupInput}>
                <label>Group ID</label>
                <input id="groupId" name="groupId" placeholder="Have code group" />
            </div>

            <div className={loginStyles.groupBtn}>
                <button onClick={() => onLoginProvider('google')}>Sign in with Google</button>
            </div>
        </section>
    )
}