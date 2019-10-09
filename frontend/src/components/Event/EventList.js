import React, { Component } from 'react'
import EventCard from './EventCard'
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import axios from 'axios'


export default class EventAll extends Component {
  state = {
    events: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('https://rocky-tundra-82590.herokuapp.com/event')
      .then(({ data }) => {
        console.log(data)
        this.setState({ events: data.event, isLoaded: true });
      })
      .catch((error) => { console.log(error) });
  }

  render() {
    const { isLoaded, events } = this.state
    console.log('larry doesnt know whats happening',events)
    return (
        
      <div>
        <h1>All Events</h1>
        <Link to="/event/add">
          <Button type="primary">Create Another Event</Button>
        </Link>
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
                <EventCard key={event._id} event={event} /> 
            ))}
        </div>
      </div>
    );
  }
}