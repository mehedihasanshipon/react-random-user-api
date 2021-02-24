// import './App.css';

import { useEffect, useState } from "react";


function App() {
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(data => setUser(data.results))
  },[])

  const [users,setUser] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <Nav />

        {
          users.map((user)=> <User name={user.name.title +' ' + user.name.first} key ={user.id.value} email = {user.email} gender= {user.gender} phone={user.phone} picture={user.picture.large} />)
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
    margin: '60px 10px 10px 20px',
    padding : '.8rem',
    backgroundColor: 'lightwhite',
    boxShadow: '.5rem .5rem .8rem gray',
    textAlign:'center'
  }

  const img = {
    width : '250px',
    height: '250px',
    borderRadius : '10%'
  }
  
  return(
    <div style = {userStyle}>
      <img style = {img} src={props.picture} alt=""/>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email} </p>
      <p>Email: {props.phone} </p>
      <p>Gender: {props.gender} </p>
    </div>
  )
}

const Nav = () => {
  const topNav = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: '#E6E6FA',
    fontFamily: 'arial',
    textAlign: 'center',
    width: '100%',
    position: 'fixed',
    top: '0',
    height: '50px',
  }
  const li = {
    float : 'right',
  }

  const home = {
    float : 'left',
    
  }

  const aHome = {
    display : 'block',
    color: '#333',
    textAlign : 'center',
    padding : '1rem 2rem',
    textDecoration: 'none',
    fontSize : '1.1rem',
  }

  const a = {
    display : 'block',
    color: '#333',
    textAlign : 'center',
    padding : '1rem 2rem',
    textDecoration: 'none',
    float: 'right',
    fontSize : '1.1rem',
    borderRight: '1px solid #bbb'
  }
  return (
    <div >
      <nav>
        
        <ul  style = {topNav}>
          
          <li style = {li}><a style = {a} href="Page1.html">Page1</a></li>
          <li style = {li}><a style = {a} href="Page2.html">Page2</a></li>
          <li style = {li}><a style = {a} href="About.html">About</a></li>
          <li style = {home}><a style = {aHome} href="Page1.html">Home</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default App;
