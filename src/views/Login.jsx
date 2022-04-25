import '../assets/css/login/login.css'
import FormLogin from '../components/Login/FormLogin'
import TitleLogin from '../components/Login/TitleLogin'
function Login() {
	return (
		<div class="body-login">
			<TitleLogin />
			<FormLogin />			
		</div>
	)
}

export default Login