import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
import axios from 'axios';
//import AUTH_SERVICE from '../../services/index';
import { Link } from 'react-router-dom'


class CreateEvent extends Component {
  state = {
    event: {},
    checked: false
  };



  //   componentDidMount() {
//     axios.get('http://localhost:3000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//             username: response.data[0].username
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   }

  handleInput = (e) => {
    const { event } = this.state;
    const key = e.target.name;
    event[key] = e.target.value;
    this.setState({ event });
    console.log(e.target.value)
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { event } = this.state;
    console.log(event);

    axios.post('https://rocky-tundra-82590.herokuapp.com/event/add', event)
      .then(res => console.log(res.data));
      
      window.location = '/event';
   }


  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100vw', height: '100vh'}}>
        <div style={{ width: '80vw', height: '80vh'  }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={{ width: '20vw'}}>
                <div>
                <Link to="/event"><img src = '/logo.png' alt='logo' style={{ height: '240px', width: 'auto'}}></img></Link> 
                </div>
                <Button type="danger" style={{width: '10vw'}} onClick={this.logout}>Log out</Button>
            </div><div style={{ width: '50vw', marginLeft: '4vw'}} >
              <p style={{fontSize: '3rem', marginTop: "4vh"}}>Create Event</p>
              <div>
                <Form onSubmit={this.onSubmit} style={{marginTop:'5vh'}}>
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Title</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="text"
                      name="title"
                      style={{width: '20vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item> 
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Description</label>
                    <br></br>
                    <Input
                      rows={4} 
                      onChange={this.handleInput}
                      type="text"
                      name="description"
                      style={{ backgroundColor: "#f0efe9", heigth: '10vh'}}
                    />
                  </Form.Item> 
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Company</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="text"
                      name="author"
                      style={{width: '20vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item>  
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Address</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="text"
                      name="address"
                      style={{width: '20vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item>  
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Cost</label>
                    <br></br>
                    <select
                      onChange={this.handleInput}
                      type="text"
                      name="cost"
                      style={{width: '20vw', height: '4vh', backgroundColor: "#f0efe9"}}
                    >
                      <option>Select a Cost</option>
                      <option value='$'>$</option>
                      <option value='$$'>$$</option>
                      <option value='$$$'>$$$</option>
                    </select>
                  </Form.Item>
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Event Type</label>
                    <br></br>
                    <select
                      onChange={this.handleInput}
                      type="text"
                      name="typeOfEvent"
                      style={{width: '20vw', height: '4vh', backgroundColor: "#f0efe9"}}
                    >
                      <option>Select an Event</option>
                      <option value='Dining'>Dining</option>
                      <option value='Sport'>Sport</option>
                      <option value='Adventure'>Adventure</option>
                      <option value='Outdoor'>Outdoor</option>
                      <option value='Theatre'>Theatre</option>
                      <option value='Art'>Art</option>
                    </select>
                  </Form.Item>
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Date</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="text"
                      name="date"
                      style={{width: '20vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item>  
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Time of Day</label>
                    <br></br>
                    <select
                      onChange={this.handleInput}
                      type="text"
                      name="timeOfDay"
                      style={{width: '20vw', height: '4vh', backgroundColor: "#f0efe9"}}
                    >
                      <option>Select a Time of Day</option>
                      <option value='AllDay'>AllDay</option>
                      <option value='8:00A-11:59A'>8:00A-11:59A</option>
                      <option value='12:00P-8:00P'>12:00P-8:00P</option>
                      <option value='8:00P-until'>8:00P-until</option>
                    </select>
                  </Form.Item>
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Image</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="text"
                      name="image"
                      placeholder = "Please place your here"
                      style={{width: '20vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input type="submit" value="Sign Up" style={{width: '20vw', marginRight: '10vw', marginTop: '1vh'}} />
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
        
      </div>      
    );
  }
}
export default CreateEvent;
