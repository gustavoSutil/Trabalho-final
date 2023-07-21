import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import axios from 'axios';
import Header from '../components/Header';

const FormularioProduto = () => {
  const [formData, setFormData] = useState({
    name: '',
    unitary_value: '',
    aliquot_icms: '',
    aliquot_ipi: '',
    aliquot_icms_st: '',
    ncm_sh: '',
    cst: '',
    cfop: '',
    weight_kg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/product', formData);
      console.log('Dados do produto enviados com sucesso:', response.data);
      // Faça algo com a resposta, como mostrar uma mensagem de sucesso ou redirecionar
    } catch (error) {
      console.error('Erro:', error);
      // Lide com o erro, exiba uma mensagem de erro ou faça outra ação
    }
  };

  return (
    <div>
    <Header></Header>
    <Container>
      <h1 className="my-4">Cadastro de Produto</h1>
      <Form onSubmit={handleSubmit}>
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
          <Label for="unitary_value">Valor Unitário</Label>
          <Input
            type="text"
            name="unitary_value"
            value={formData.unitary_value}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="aliquot_icms">Alíquota ICMS</Label>
          <Input
            type="text"
            name="aliquot_icms"
            value={formData.aliquot_icms}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="aliquot_ipi">Alíquota IPI</Label>
          <Input
            type="text"
            name="aliquot_ipi"
            value={formData.aliquot_ipi}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="aliquot_icms_st">Alíquota ICMS ST</Label>
          <Input
            type="text"
            name="aliquot_icms_st"
            value={formData.aliquot_icms_st}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ncm_sh">NCM SH</Label>
          <Input
            type="text"
            name="ncm_sh"
            value={formData.ncm_sh}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cst">CST</Label>
          <Input
            type="text"
            name="cst"
            value={formData.cst}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cfop">CFOP</Label>
          <Input
            type="text"
            name="cfop"
            value={formData.cfop}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="weight_kg">Peso (kg)</Label>
          <Input
            type="text"
            name="weight_kg"
            value={formData.weight_kg}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
    </div>
  );
};

export default FormularioProduto;
