import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Wrapper } from "./ContactFormElements";
import {
  toastifyError,
  toastifySuccess,
} from "../ToastifyNotification/ToastifyNotification";
import { Button, Form } from "react-bootstrap";

const SERVICE_ID = "service_8b1b56p";
const TEMPLATE_ID = "template_mtr2hv7";
const USER_ID = "user_Llm4guEucdS8cquvMXQ7b";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email });

    try {
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      resetForm();
      toastifySuccess();
    } catch (error) {
      console.log(e);
      toastifyError();
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Subject:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
