import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import * as Validator from "validatorjs";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    let data = {
      fullName,
      email,
      password,
      confirmPassword,
    };

    let rules = {
      fullName: "required",
      email: "required|email",
      password: "required",
      confirmPassword: "required",
    };

    let validation = new Validator(data, rules);
    validation.passes();

    if (validation.fails()) {
      setValidationErrors(validation.errors.all());
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password dan Konfirmasi Password harus sama !!!");
      return;
    }

    console.log(formData);

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Container className="w-50 border rounded-3 p-5 mt-5 bg-light shadow mb-5">
      <h2 className="mb-3 text-center text-primary fw-bold text-decoration-underline">
        Form Registrasi
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            className="mb-3"
          />
          {validationErrors.fullName && (
            <p className="text-danger">{validationErrors.fullName[0]}</p>
          )}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            className="mb-3"
          />
          {validationErrors.email && (
            <p className="text-danger">{validationErrors.email[0]}</p>
          )}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            className="mb-3"
          />
          {validationErrors.password && (
            <p className="text-danger">{validationErrors.password[0]}</p>
          )}
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Konfirmasi Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Masukkan konfirmasi password"
            className="mb-3"
          />
          {validationErrors.confirmPassword && (
            <p className="text-danger">{validationErrors.confirmPassword[0]}</p>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Daftar
        </Button>
      </Form>
    </Container>
  );
}
