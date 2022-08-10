export const signUp = async (username, email, password, setter) => {
  try {
    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "username" : username,
        // "firstName" : firstname,
        // "lastName" : lastname,
        "email" : email,
        "password" : password
      })
    });
    const data = await response.json();
    // console.log(data.savedUser.userName);
    console.log("Under here")
    console.log(data)
    setter(data.msg.username);
  }
  catch(error)
  {
    console.log(error);
  }
}

export const getAllUsers = async (setList) => {
  try {
    const response = await fetch("http://localhost:5000/user", {
      method: "GET",
    });
    const data = await response.json()
    setList(data.allUsers)
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}