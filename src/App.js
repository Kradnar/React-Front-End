import {useState,useEffect} from 'react';
import SignUpOrLogin from './components/signupOrLogin'
import getAllUsers from "./utils"

import './App.css';


function App() {
  const [user, setUser] = useState("No User");


  const [myPics, setMyPics] = useState([]);
  const [displayImages, setDisplay] = useState(false);
 

  // const fetchPics = async () => {
  //   const response = await fetch("https://picsum.photos/v2/list");
  //   const data = await response.json();
  //   setMyPics(data)   //--- myPics = data
  //   console.log(data)
  // }

  useEffect(()=> {
    <getAllUsers />
    // fetchPics();
    // console.log(myPics)
  },[])


  return (
    // {user} 
    // ?
    <div className="App">
      <SignUpOrLogin setter = {setUser}/>
      <br></br>
      {user ? <h1>{user} logged in</h1> : <h1>not logged in</h1>}
      <br></br>
        <button onClick={(event) => setDisplay(!displayImages)}>Toggle Images</button>
        {/* <button onClick={(event) => setDisplay(false)}>Click Me Off</button> */}
      {displayImages &&
      myPics.map((item,index) => {
        return (
          <div>
          <h2>{item.author}</h2>
          <img src={item.download_url} alt="Lorem Picsum" />
          </div>
        )
      })}
    </div>
      // :
      // console.log("No-one's here")
  );
}

export default App;



  // for (let i = 0; i < myArray.length; i++)
  // {
  //   console.log(myArray[i].name);
  // }

  // myArray.map((item, index) => {
  //   console.log(item.name, index)
  // })





      {/* <Box personsname={user} age={age} character={character} />
      <br></br>
      <input onChange={(event) => changeUser(event.target.value,setTmpUser)} />
      <br></br>
      <input onChange={(event) => setAge(event.target.value)} />
      <br></br>
      <input onChange={(event) => setCharacter(event.target.value)} />
      <br></br>
      <button onClick={(event) => setUser(tmpUser)}>Click Me</button>
      {user && <Box personsname={user} age={age} character={character}/>} 
      {user ? <div><Other /><h1>user logged in</h1></div> : <h1>user not logged in </h1>} */}