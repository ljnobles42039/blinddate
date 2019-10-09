import React, { Component } from 'react';
import { MyContext } from '../context/index';
import {  Button, Icon } from 'antd';
import { Link } from 'react-router-dom'


export default class Profile extends Component {

  state = {
    user: {
      username: '',
      city: ''
    }
  };


  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/../login');
    const userinfo = this.context.state.loggedUser
    this.setState( userinfo );
    console.log(userinfo)
    console.log(this.context.state.loggedUser.username)
  }




  logout() {
    localStorage.clear();
    window.location.href = '/';
}


  render() {
    const user = this.state
    return (
      <div style={{width: '100vw', height: '100vh', backgroundImage: 'url("/background.jpeg")', backgroundSize: 'cover'}}>
        <Button type="danger" style={{width: '10vw'}} onClick={this.logout}>Log out</Button>
       <div style={{width: '35vw', marginTop: '15vh', marginLeft: '10vw'}}>
        <p style={{fontSize: '3rem',  color: "white", marginTop: "1vh"}}>Profile</p>
        <h2 style={{fontSize: '2rem', color: "white", padding: "0"}}>Username:</h2>
        <p style={{fontSize: '1.3rem',  color: "white"}}>{user.username}</p>
        <h2 style={{fontSize: '2rem', color: "white", padding: "0"}}>Email: </h2>
        <p style={{fontSize: '1.3rem',  color: "white"}}>{user.email}</p>
        <Link to="/edit">  <Button type="primary" style={{width: '12vw', float: 'left', marginTop: '80px'}}><Icon type="edit" /></Button> </Link>
        <Link to="/event/random"> <Button type="submit" value="Event" style={{ width: '30vw', marginRight: '10vw', marginTop: '6vh'}}>Choose your Adventure</Button></Link>
       </div>
      </div>
    );
  }
}

Profile.contextType = MyContext;