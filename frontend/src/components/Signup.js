import React, { Component } from 'react';
import { Input, Form, Switch } from 'antd';
import AUTH_SERVICE from '../services/index';
import { Link } from 'react-router-dom'

class Signup extends Component {
  state = {
    user: {},
    checked: false
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
    console.log(e.target.value)
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    AUTH_SERVICE.signup(this.state.user)
      .then((response) => {
        console.log(response.data);
        this.props.history.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  onChange = checked => {
    this.setState({ checked });
    if (!checked) {
      this.setState({ user: { role: 'USER' } })
    } else {
      this.setState({ user: { role: 'PROVIDER' } })
    }
  };

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100vw', height: '100vh'}}>
        <div style={{ width: '80vw', height: '100vh'  }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <div style={{ width: '50vw', marginLeft: '4vw'}} >
              <p style={{fontSize: '3rem', marginTop: 0, padding: 0}}>Sign Up</p>
              <div>
                <div>
                  Are you a Provider? <p />{" "}
                  <Switch checkedChildren="PROVIDER" unCheckedChildren="USER" defaultChecked={false} onChange={this.onChange}>
                    {" "}
                  </Switch>
                </div>
                <Form onSubmit={this.onSubmit} style={{marginTop:'5vh'}}>
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Username or Company</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="text"
                      name="username"
                      style={{width: '25vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item> 
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Password</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="password"
                      name="password"
                      style={{width: '25vw',backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item> 
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Email</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="text"
                      name="email"
                      style={{width: '25vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item> 
                  {this.state.checked ? (
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Phone Number</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="text"
                      name="phoneNumber"
                      style={{width: '25vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item>  
                  ) : null } 
                  {this.state.checked ? (
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Website</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="text"
                      name="website"
                      style={{width: '25vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item>  
                  ) : null } 
                  
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>City</label>
                    <br></br>
                    <select
                      onChange={this.handleInput}
                      type="text"
                      name="city"
                      style={{width: '25vw', height: '4vh', backgroundColor: "#f0efe9"}}
                    >
                      <option>Select a City</option>
                      <option value='CDMX'>CDMX</option>
                    </select>
                  </Form.Item>
                  <Form.Item>
                    <Input type="submit" value="Sign Up" style={{width: '25vw', marginRight: '10vw', marginTop: '1vh'}} />
                  </Form.Item>
                </Form>
                <p style={{fontSize: '.9rem', width: '25vw', color: "#bdbdbb"}}>If you already have an account, you can sign in <Link to="/login" style={{color: 'pink'}}>here</Link></p>
              </div>
            </div>
            <div style={{ width: '20vw'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <img src = '/logo.png' alt='logo' style={{height: '240px', width: 'auto'}}></img>
                </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}
export default Signup;