import React from "react";
import { findDOMNode } from "react-dom";

const Register = () => {
    return (
        <body>
            <h1>Welcome to Paper Trading</h1>
        
            <form action="/register" method="POST">
                <fieldset>
                  <label for="username">Username</label>
                  <input id="username" name="username" placeholder="Username" />
                  <br/>
                  <br/>
                  <label for="email">Email Adress</label>
                  <input id="email" name="email" placeholder="Email" />
                  <br/>
                  <br/>
                  <label for="password">Password</label>
                  <input id="password" name="password" placeholder="Password" />
                  <br/>
                  <br/>
                  <label for="cfmPassword">Confirm Password</label>
                  <input id="cfmPassword" name="cfmPassword" placeholder="Confirm Password" />
                  <br/>
                  <br/>
                  <label for="dob">Date of Birth</label>
                  <input id="dob" name="dob" placeholder="dob" />
                  <br/>
                  <br/>
                  <label for="gender">Gender</label>
                  <select name="gender" id="gender">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <br/>
                  <br/>
                  <label for="risk">Trading Risk</label>
                  <select name="risk" id="risk">
                    <option>Low</option>
                    <option>Normal</option>
                    <option>High</option>
                  </select>
                  <br/>
                  <br/>
                  <label for="amount">Starting Amount</label>
                  <select name="amount" id="amount">
                    <option>5,000</option>
                    <option>10,000</option>
                    <option>30,000</option>
                    <option>50,000</option>
                  </select>
                  <br/>
                  <br/>
                  <label for="newToTrading?">First timer?</label>
                  <input
                    type="checkbox"
                    id="newToTrading"
                    name="newToTrading"
                  />
                </fieldset>
                <input type="submit" value="Create" />
              </form>
        
        </body>
        
    )
};

export default Register