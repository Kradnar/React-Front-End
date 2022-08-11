import { useState } from "react"
import { read, updateU } from "../utils"

const UpdateUser = ({setter}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [newUsername, setNewUsername] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();

  const updateHandler = async (event) => {
    event.preventDefault();
    await updateU(username, password, newUsername, newEmail, newPassword, setter)
  }

return (
  <form onSubmit ={updateHandler}>
    <label>Username:
      <input onChange = {(event) => setUsername(event.target.value)}/>
    </label>
    <br></br>
    <label>Password:
      <input onChange = {(event) => setPassword(event.target.value)}/>
    </label>
    <br></br>
    <h3>Please only enter one of the following fields</h3>
    <br></br>
    <label>New Username:
      <input onChange = {(event) => setNewUsername(event.target.value)}/>
    </label>
    <br></br>
    <label>New Email:
      <input type="email" onChange = {(event) => setNewEmail(event.target.value)}/>
    </label>
    <br></br>
    <label>New Password:
      <input onChange = {(event) => setNewPassword(event.target.value)}/>
    </label>
    <br></br>
    <button type="submit">Click here to SignIn or LogUp!</button>
  </form>
)

}

export default UpdateUser;