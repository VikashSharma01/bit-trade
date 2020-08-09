import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const navs = [
      {
        id: 1,
        title: 'nav',
      },
      {
        id: 1,
        title: 'nav',
      },
      {
        id: 1,
        title: 'nav',
      },
      {
        id: 1,
        title: 'nav',
      },
      {
        id: 1,
        title: 'nav',
      },
    ]
    return ( 
      <Container
        fluid
        className="p-0"
      >
        <Row
          className="bg-dark p-3"
        >
          <Col
            xs={"auto"}
            className=""
          >
            <img
              src="https://static.currency.com/img/media/bitcoin.dd8a16.png"
              alt=""
              height="30px"
              width="30px"
            />
          </Col>
          {navs.map((nav) => (
            <Col
              xs={"auto"}
              key={nav.id}
              className="text-white"
            >
              <b>{nav.title}</b>
            </Col>
          ))}
        </Row>
        <Row
          className="bg-secondary p-4"
        >
          <Col
            className="pt-3 fs-5 text-white"
            xs={10}
          >
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '25px',
              }}
            >
              BUY AND SELL DIGITAL ASSETS
            </div>
            <div
              style={{
                width: '70%',
              }}
            >
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </div>

            <Row>
              <Col
                xs={6}
                className="pt-3"
              >
                <b>I want to spend</b>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Amount"
                  />
                </div>
              </Col>
              <Col
                xs={3}
                className="pt-3"
              >
                <b>I want to spend</b>
                <div>
                <select
                  // type="text"
                  className="form-control"
                  placeholder="Enter Amount"
                  value="RTC"
                >
                  <option value="RTC">RTC</option>
                  <option value="RTC">RTC</option>
                  <option value="RTC">RTC</option>
                </select>
                </div>
              </Col>
              <Col
                xs={3}
                className="pt-3"
              >
                <b>I want to buy</b>
                <div>
                  <select
                    // type="text"
                    className="form-control"
                    placeholder="Enter Amount"
                    value="RTC"
                  >
                    <option value="RTC">RTC</option>
                    <option value="RTC">RTC</option>
                    <option value="RTC">RTC</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={2}
            className="pt-3"
          >
            <div className="bg-white p-4" />
          </Col>
        </Row>
        <Row
          className="bg-light p-3"
        >
          <Col xs={12} className="text-center">
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'blue',
              }}
            >
              Trade
            </span>
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                paddingLeft: '20px',
              }}
            >
              How it works?
            </span>
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                paddingLeft: '20px',
              }}
            >
              Why BitCoins?
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
