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
    console.log(data.msg.username)
    setter(data.msg.username);
  }
  catch(error)
  {
    console.log(error);
  }
}

export const getAllUsers = async () => {
  try {
    const response = await fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {"Content-Type": "application/json"},

    });
    const data = await response.json()
  } catch (error) {
    console.log(error);
  }
}