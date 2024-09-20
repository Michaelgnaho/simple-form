import React from "react";
// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./ErrorModel.css";

const ErrorModel = (props) => {
  return (
    <div>
      <Container
        className="form-container-up d-flex align-items-center err"
        onClick={props.onConfirmErr}
      >
        <Card className="form-card f-card">
          <Card.Body className="crd">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <header>{props.title}</header>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <p>{props.message}</p>
                </Form.Group>
              </Row>
              <Button onClick={props.onConfirmErr}>Ok</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
export default ErrorModel;
