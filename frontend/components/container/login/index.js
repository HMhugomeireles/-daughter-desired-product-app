
import LoginUI from '../../ui/login'

export default function LoginContainer() {
    function handleLoginProvider(provider) {
        console.log(provider)
    }

    return <LoginUI onLoginProvider={handleLoginProvider} />
}