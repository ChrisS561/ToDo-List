
import Textfield from './Textfield'
import SubmitButton from './SubmitButton';


export default function LoginContainer() {
  return (
    <div className="login-box">
        <div className='login-title'>Login</div>
        <Textfield label="Email" type="text"/>
        <Textfield label="Password" type="password"/>
        <SubmitButton/> 
        </div>
  );
}
