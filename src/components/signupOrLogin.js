import { useState } from "react"
import { login, signUp } from "../utils"

const SignupOrLogin = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUpHandler = async (event) => {
    event.preventDefault();
    await signUp(username, email, password, setter)
  }

  const logInHandler = async (event) => {
    event.preventDefault();
    await login(username, password, setter)
  }

return (
  <div>
    <form onSubmit ={signUpHandler}>
      <label>Username:
        <input onChange = {(event) => setUsername(event.target.value)}/>
      </label>
      <br></br>
      <label>Email:
        <input type="email" onChange = {(event) => setEmail(event.target.value)}/>
      </label>
      <br></br>
      <label>Password:
        <input onChange = {(event) => setPassword(event.target.value)}/>
      </label>
      <br></br>
      <button type="submit">Click here to SignUp and LogIn!</button>
    </form>
    <br></br>
    <form onSubmit ={logInHandler}>
      <label>Username:
        <input onChange = {(event) => setUsername(event.target.value)}/>
      </label>
      <br></br>
      <label>Password:
        <input onChange = {(event) => setPassword(event.target.value)}/>
      </label>
      <br></br>
      <button type="submit">Click here to LogIn!</button>
    </form>
  </div>
  
)

}

export default SignupOrLogin;