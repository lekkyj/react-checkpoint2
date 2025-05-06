// src/components/PlayersList.js
import React from 'react';
import Player from './Player';
import players from '../players';
import { Container, Row, Col } from 'react-bootstrap';

const PlayersList = () => {
  return (
    <Container>
      <h2 className="text-center mt-4 mb-4">Football Players</h2>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs="auto">
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
