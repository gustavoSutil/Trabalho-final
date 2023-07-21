import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import axios from 'axios';
import Header from '../components/Header';

const Formulario = () => {
  const [formData, setFormData] = useState({
    cnpj: '',
    name: '',
    ie: '',
    razao_social: '',
    phone_number: '',
    email: '',
    cep: '',
    street: '',
    number: '',
    city: '',
    UF: '',
    observation: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/client/', formData);
      console.log('sucesso:', response.data);
      
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return  (
    <div>
    <Header>
    </Header>
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="cnpj">CNPJ</Label>
          <Input
            type="text"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Nome</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ie">Inscrição Estadual</Label>
          <Input
            type="text"
            name="ie"
            value={formData.ie}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="razao_social">Razão Social</Label>
          <Input
            type="text"
            name="razao_social"
            value={formData.razao_social}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone_number">Telefone</Label>
          <Input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cep">CEP</Label>
          <Input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="street">Endereço</Label>
          <Input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="number">Número</Label>
          <Input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">Cidade</Label>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UF">Estado</Label>
          <Input
            type="text"
            name="UF"
            value={formData.UF}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="observation">Observação</Label>
          <Input
            type="textarea"
            name="observation"
            value={formData.observation}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="status">Status</Label>
          <Input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
    </div>
  );
};

export default Formulario;