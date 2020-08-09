import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './Home';

function App() {
  return (
    <Container
      fluid
    >
      <Row>
        <Col
          xs={12}
        >
          <Home/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
