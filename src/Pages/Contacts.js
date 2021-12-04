import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Contacts extends Component {
  static defaultProps = {
    center: {
      lat: 50.443,
      lng: 30.479,
    },
    zoom: 16,
  };
  render() {
    return (
      <Container fluid style = {{ minHeight: '75vh' }}>
        <Row>
          <Col>
            <h1 className="m-4 text-center">Зв'язок з нами</h1>
          </Col>
          <Col>
            <h1 className="m-4 text-center">Ми на карті</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Ваш електронний адрес</Form.Label>
                <Form.Control type="email" placeholder="Введіть email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Ваше повідомлення</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Відправити
              </Button>
            </Form>
          </Col>
          <Col>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDFVthgPf4h_u9lxuipyje7hggx0wYV6dE",
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={50.44303}
                lng={30.47965}
                text="Генеральний Штаб ЗСУ"
              />
            </GoogleMapReact>
          </Col>
        </Row>
      </Container>
    );
  }
}
