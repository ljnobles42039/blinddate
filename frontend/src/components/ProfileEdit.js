import React from "react";
import { Input, Form, Button, Icon } from 'antd';
import { MyContext } from '../context/index';
import AUTH_SERVICE from '../services/index';




export default class ProfileEdit extends React.Component {
  state = {
    updatedUser: {}
  };

  componentDidMount (){
    this.setState({updatedUser: this.context.state.loggedUser})
    //  console.log(this.state)
    if (localStorage.user) {
      let updatedUser = JSON.parse(localStorage.user)
   
      this.setState({updatedUser})
    }
  }

  handleInput = (e) => {
    const { updatedUser } = this.state;
    const key = e.target.name;
    updatedUser[key] = e.target.value;
    this.setState({ updatedUser });
    
  };

  
  onSubmit = (e) => {
    e.preventDefault()
  
   
   
    const fd = new FormData()
    for (const key in this.state.updatedUser){fd.append(key, this.state.updatedUser[key])}

      AUTH_SERVICE.edit(fd, this.props.match.params.id)
      
        .then(res => {
          console.log(res);
          this.props.history.push('/login')
        })
        .catch(e => console.log(e));
   
  };

  deleteInput = () => {
    AUTH_SERVICE.deleteUser(this.props.match.params.id)
    .then(res =>{
      console.log('user deleted', res)
      this.props.history.push('/profile')
    })
    .catch(e => console.log(e))
  }



  render() {

    return (

      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100vw', height: '100vh'}}>
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
              <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Email</label>
              <br></br>
              <Input
                onChange={this.handleInput}
                type="text"
                name="email"
                style={{width: '25vw', backgroundColor: "#f0efe9"}}
              />
            </Form.Item> 
            <Form.Item>
           <Input style={{width: '20vw'}}  type="submit"  value="Confirm Changes" /> 
            </Form.Item>
          </Form>
          <div style={{width: '20vw'}}>
            <Button type= 'danger' onClick={this.deleteInput} ><Icon type="delete" /></Button>
          </div>
      </div>
    );
  }
}


ProfileEdit.contextType = MyContext;