import React from "react";
import "./LogIn.css";

class LogIn extends React.Component {
  login = () => {
    localStorage.setItem("isLoggedIn", true);
  }

  render() {
    return (
    <div style={{
        height: "100vh"
    }}>
        <div class='rectangle'>            
            <form class="form" action="./home" id="login">
                <h1 class="form__title">Log in</h1>
                
                <div class="form__input-group">
                    <p class="form__email">Email</p>
                    <input type="email" id="loginEmail" class="form__input" placeholder="Your email address" />
                    
                </div>
                <div class="form__input-group">
                    <p class="form__password">Password</p>
                    <input type="password" id="loginPassword" class="form__input" autofocus placeholder="Password" />
                    
                </div>
                <button class="form__button" onClick={this.login}>Continue</button>
                <p class="form__text">
                    <a href="#" class="form__link">Forgot your password?</a>
                </p>
                <p class="form__text">
                    <a class="form__link" href="./signup" id="linkCreateAccount">Don't have an account? Sign up</a>
                </p>
            </form>

            
        </div>



    </div>);
  }
}

export default LogIn;


