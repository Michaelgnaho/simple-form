import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./AddUser.css";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [err, setErr] = useState();

  const handleUsernameChange = (event) => {
    setEnteredUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErr({
        title: "an error ocurred",
        message: "Enter a valid name ",
      });
      return;
    }
    if (+enteredAge < 1) {
      setErr({
        title: "an error ocurred",
        message: "your age must be greater than 0",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errHandler = function () {
    setErr(null);
  };

  return (
    <div>
      {err && (
        <ErrorModel
          title={err.title}
          message={err.message}
          onConfirmErr={errHandler}
        />
      )}
      <Container className="flex justify-center items-center  m">
      <h1 className="bg-slate-500 text-white text-5xl text-center mx-3 p-4 pt-5">Simple Form</h1>                    <Card className="flex justify-center items-center">
          <Card.Body className="crd">
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Name"
                    value={enteredUsername}
                    onChange={handleUsernameChange}
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
                    value={enteredAge}
                    onChange={handleAgeChange}
                  />
                </Form.Group>
              </Row>
              <Button type="submit">Add User</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AddUser;
