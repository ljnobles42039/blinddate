import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Button } from 'antd'

const { Title, Text } = Typography

function EventCard({ event }) {
  return (
    <Card title={event.title} style={{ width: '250px', margin: '2rem' }} cover={<img src={event.image} alt={event.title} height="370px" />}>
      <Title level={4}>{event.title}</Title>
      <Text strong>Contributed by: <span><Text type="secondary">{event.author}</Text></span> </Text>
      <Link to={`/event/${event._id}`}>
        <Button>View event Details</Button>
      </Link>
    </Card>
  );
}

export default EventCard; 