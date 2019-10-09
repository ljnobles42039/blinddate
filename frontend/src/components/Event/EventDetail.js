import React, { Component } from 'react'
import axios from 'axios'
import { Card, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

export default class EventDetail extends Component {

  state= {
    event: {}
  }

  componentDidMount() {
    axios
    .get(`https://rocky-tundra-82590.herokuapp.com/event/${this.props.match.params.id}`)
    .then (( data ) => {
      this.setState({ event: data.data})
      
    })
    .catch((error)=> {})
      }


  render() {
    return (

    <Card title='Your Date Awaits .....' style={{ width: '300px', margin: '2rem' }} cover={<img src={this.state.event.image} alt={this.state.event.title} height="370px" />}>
        <Title level={4}>{this.state.event.title}</Title>
        <br></br>
        <Text strong>Contributed by: <span><Text type="secondary">{this.state.event.author}</Text></span></Text>
        <br></br>
        <Text strong>Description: <span><Text type="secondary">{this.state.event.description}</Text></span></Text>
        <br></br>
        <Text strong>Address: <span><Text type="secondary">{this.state.event.adress}</Text></span></Text>
        <br></br>
        <Text strong>Date: <span><Text type="secondary">{this.state.event.date}</Text></span></Text>
        <br></br>
        <Text strong>Type of Event: <span><Text type="secondary">{this.state.event.typeOfEvent}</Text></span></Text>
        <br></br>
        <Text strong>Time of Day: <span><Text type="secondary">{this.state.event.timeOfDay}</Text></span></Text>
        <Link to="/profile">  <Button type="primary" style={{width: '12vw', float: 'left', marginTop: '80px'}}>Confirm</Button></Link> 
    </Card>
      
    )
  }
}

