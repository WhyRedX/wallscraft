import React from "react";
import "./SignUp.css";

export function SignUp() {
  return (
    <div id="SignUp-gate">
        <div className="signup-container center">
          <div className="signup-header">
             <h1>Create an account</h1>
          </div>
          <div className="signup-form">
            <p>You must be older than 13 years old and agree to our <a>terms of service</a> to sign up.</p>
            <form>
               <input type="text" id="username" name="username" placeholder="Username" value=""/>
               <input type="text" id="email" name="email" placeholder="E-mail" value=""/>
               <input type="number" id="email" name="mobilenumber" placeholder="Mobile Number" value=""/>
               <input type="password" id="css" name="css" placeholder="Password"/>
               <input type="password" id="css" name="css" placeholder="Confirm Password"/>
               <div className="signup-footer">
                 <p>Do you have an account already? <a>Sign in!</a></p>
                  <input type="submit" value="Create an account"/>
               </div>
            </form>
          </div>
        </div>
    </div>
  );
}
