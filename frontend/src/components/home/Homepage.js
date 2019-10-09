import React, { Component } from 'react';
import { MyContext } from '../../context';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

export default class Homepage extends Component {


  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100vw', height: '100vh'   }}>
        <div style={{ width: '80vw', height: '70vh',  backgroundImage: 'url("/background.jpeg")', backgroundSize: 'cover'  }}>
          <div style={{marginTop: '5vh',marginLeft: '27vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '35vw', alignContent: 'center'}}>
            <p style={{fontSize: '3rem', marginLeft:'6vw'}}>Blind Date</p>
            <p style={{fontSize: '2rem', color: "white"}} >Take a chance with interesting experiences in your city</p>
            <Link to="/signup"> <Button type="submit" value="signup" style={{ width: '30vw', marginRight: '10vw', marginTop: '6vh'}}>Sign up</Button></Link>
            <Link to="/login"> <Button type="submit" value="Login" style={{ width: '30vw', marginRight: '10vw', marginTop: '6vh'}}>Login</Button></Link>
          </div>
        </div>
      </div>
    ) 
  }  
}

Homepage.contextType = MyContext;

 

