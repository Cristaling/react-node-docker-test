import LoginForm from '../components/login/LoginForm';
import '../styles/login.css';

export const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className="login-form-container">
                <LoginForm/>
            </div>
        </div>
    );
}