// pages/clientes.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Clientes = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [clientes, setClientes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoCliente = { nome, email };
    setClientes([...clientes, novoCliente]);
    setNome('');
    setEmail('');
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="nome">Nome</Label>
              <Input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <Button type="submit" color="primary">Salvar</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Clientes Cadastrados</h2>
          <ul>
            {clientes.map((cliente, index) => (
              <li key={index}>
                <strong>{cliente.nome}</strong> - {cliente.email}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Clientes;
