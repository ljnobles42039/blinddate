import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Card,  Button } from 'antd'

export default class EventRandom extends Component {
  state = {
    events: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/event/random')
      .then(({ data }) => {
        console.log(data)
        this.setState({ events: data.event, isLoaded: true });
      })
      .catch((error) => { console.log(error) });
  }

  render() {
    const { isLoaded, events } = this.state
    return (
        
      <div>
        <h1>Chooose Your Adventure</h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            width: '100vw',
            height: '100vh'
          }}>
            {isLoaded && events.map((event) => (
              <Card style={{ width: '250px', margin: '2rem', height: "370px" }} cover={<img alt="example" src='/../logo.png' />}
              >
                <Link to={`/event/${event._id}`}>
                  <Button>View event Details</Button>
                </Link>
              </Card>
            ))}
        </div>
      </div>
    );
  }
}