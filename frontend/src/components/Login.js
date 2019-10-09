import React, { Component } from 'react';
import { Card, Input, Form } from 'antd';
import AUTH_SERVICE from '../services/index';
import { MyContext } from '../context';
import { Link } from 'react-router-dom'


class Login extends Component {
  state = {
    user: {}
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.login(this.state.user)
      .then((response) => {
        console.log(this.state.user)
        this.context.logUser(response.data.user);
        if (response.data.user.role === "USER") {
            this.props.history.push('/profile');            
        } else {
            this.props.history.push('/host/profile');            
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100vw', height: '100vh'}}>
        <Card style={{ width: '80vw', height: '80vh', backgroundImage: 'url("/assets/oval-bg.png")', backgroundSize: 'cover'  }}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <div style={{ width: '50vw', marginLeft: '4vw'}} >
                    <p style={{fontSize: '3rem', marginTop: "6vh"}}>Login</p>
                <div>
                <div>
                    <Form onSubmit={this.onSubmit} style={{marginTop:'10vh'}}>
                        <Form.Item>
                            <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Username or Company Name</label>
                            <br></br>
                            <Input onChange={this.handleInput} type="text" name="username" style={{width: '20vw', backgroundColor: "#f0efe9"}} />
                        </Form.Item>
                        <Form.Item>
                            <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Password</label>
                            <br></br>
                            <Input
                            onChange={this.handleInput}
                            type="password"
                            name="password"
                            style={{width: '20vw', backgroundColor: "#f0efe9"}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input type="submit" value="Log In" style={{width: '20vw', marginRight: '10vw', marginTop: '1vh'}} />
                        </Form.Item>
                    </Form>
                </div>
                <div>
                    <p style={{fontSize: '.9rem', width: '20vw', color: "#bdbdbb"}}>If you do not have an account you can create your account <Link to="/signup" style={{color: 'pink'}}>here</Link></p>
                </div>
                    
            </div>
            </div>
                <div style={{ width: '20vw'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <img src = '/logo.png' alt='logo' style={{height: '240px', width: 'auto'}}></img>
                    </div>
                </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}








Login.contextType = MyContext;
export default Login;