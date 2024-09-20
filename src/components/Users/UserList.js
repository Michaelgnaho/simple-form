import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./AddUser.css";
import Container from "react-bootstrap/Container";

const UserList = (props) => {
  return (
    <Container fluid>
      <Row>
        {props.users.map((user, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="d-flex align-items-stretch">
            <Card className="form-card f-card m-4 p-4">
              <Card.Body className="crd">
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Username"
                        value={user.name}
                        readOnly
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                      <Form.Label>Age (Years)</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Enter Age"
                        value={user.age}
                        readOnly
                      />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
