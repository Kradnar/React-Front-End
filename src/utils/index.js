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
    setter(data.username);
  }
  catch(error)
  {
    console.log(error);
  }
}

// export const login = async (username, password) => {
//   try {
//     const response = await fetch("http://localhost:5000/user", {
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({
//         "username" : username,
//         "password" : password
//       })
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }