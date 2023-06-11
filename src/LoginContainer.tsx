import Textfield from './Textfield'; // Importing the Textfield component from './Textfield'
import SubmitButton from './SubmitButton'; // Importing the SubmitButton component from './SubmitButton'

export default function LoginContainer() {
  return (
    <div className="login-box"> {/* Outer container for the login box */}
      <div className="login-title">Login</div> {/* Title for the login box */}
      <Textfield label="Email" type="text" /> {/* Textfield component for the email input */}
      <Textfield label="Password" type="password" /> {/* Textfield component for the password input */}
      <SubmitButton /> {/* SubmitButton component */}
    </div>
  );
}
