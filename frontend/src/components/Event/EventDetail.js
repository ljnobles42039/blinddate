import React, { Component } from 'react'
import axios from 'axios'
import { Card, Typography } from 'antd'

const { Title, Text } = Typography

export default class EventDetail extends Component {

  state= {
    event: {}
  }

  componentDidMount() {
    axios
    .get(`http://localhost:3000/event/${this.props.match.params.id}`)
    .then (( data ) => {
      this.setState({ event: data.data})
      
    })
    .catch((error)=> {})
      }


  render() {
    return (

    <Card title={this.state.event.title} style={{ width: '300px', margin: '2rem' }} cover={<img src={this.state.event.image} alt={this.state.event.title} height="370px" />}>
        <Title level={4}>{this.state.event.title}</Title>
        <Text strong>Contributed by: <span><Text type="secondary">{this.state.event.author}</Text></span> </Text>
    </Card>
      
    )
  }
}

