import React from "react";
import "./SignUp.css";

class SignUp extends React.Component {

  render() {
    return (
    <div>
        <div class='rectangle'>            
        <form class="form" action="./login" id="createAccount">
                <h1 class="form__title">Sign up</h1>
                <div class="form__input-group">
                    <input type="text" id="signupUsername" class="signup__input" autofocus placeholder="Username" />
                </div>
                <div class="form__input-group">
                    <input type="email" id="signupEmail" class="signup__input" autofocus placeholder="Email Address" />
                </div>
                <div class="form__input-group">
                    <input type="password" id="signupPassword" class="signup__input" autofocus placeholder="Password" />
                </div>
                <div class="form__input-group">
                    <input type="password" class="signup__input" autofocus placeholder="Confirm password" />
                </div>
                <button class="form__button" id="signupContinue" type="submit">Continue</button>
                <p class="form__text">
                    <a class="form__link" href="./login" id="linkLogin">Already have an account? Log in</a>
                </p>
            </form>

            
        </div>



    </div>);
  }
}

export default SignUp;


