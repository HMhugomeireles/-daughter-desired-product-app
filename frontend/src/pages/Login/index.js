import pagLogin from './paglogin.module.css'

export default function Login() {

    function handleLogin(e) {
        console.log("try login")
    }

    return (
        <div className={pagLogin.container}>
            <button click={handleLogin}>Login with google account</button>
        </div>
    )
}
