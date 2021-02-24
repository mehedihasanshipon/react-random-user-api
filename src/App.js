// import './App.css';

import { useEffect, useState } from "react";


function App() {
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=500')
    .then(response => response.json())
    .then(data => setUser(data.results))
  },[])

  const [users,setUser] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        {
          users.map((user)=> <User name={user.name.title +' ' + user.name.first} key ={user.id.value} email = {user.email} gender= {user.gender} phone={user.phone} />)
        }
      </header>
    </div>
  );
}

const User = (props) => {
  const userStyle = {
    borderRadius: '1rem',
    width : '28%',
    float: 'left',
    margin: '1rem',
    padding : '.8rem',
    backgroundColor: 'lightpink',
    boxShadow: '.5rem .5rem .8rem gray',
    textAlign:'center'
  }
  
  return(
    <div style = {userStyle}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email} </p>
      <p>Email: {props.phone} </p>
      <p>Email: {props.gender} </p>
    </div>
  )
}

export default App;
