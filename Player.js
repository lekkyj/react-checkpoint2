// src/components/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({
  name = "Unknown",
  team = "No team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  image = "https://via.placeholder.com/200"
}) => {
  const cardStyle = { width: '18rem', margin: '1rem', border: '1px solid #ccc' };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} height="250px" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
