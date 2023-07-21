import { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import axios from 'axios';
import Header from '../components/Header';

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await axios.get('http://localhost:8000/api/product');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
    fetchProdutos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8000/api/product/'+id);
      // Atualize a lista de produtos após a exclusão
      setProdutos(produtos.filter((produto) => produto.id !== id));
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
    <Header></Header>
    <Container>
      <h1 className="my-4">Lista de Produtos</h1>
      <ListGroup>
        {produtos.map((produto) => (
          <ListGroupItem key={produto.id}>
            <strong>ID:</strong> {produto.id}
            <br />
            <strong>Nome:</strong> {produto.name}
            <br />
            <strong>Valor Unitário:</strong> {produto.unitary_value}
            <br />
            <strong>Alíquota ICMS:</strong> {produto.aliquot_icms}
            <br />
            <strong>Alíquota IPI:</strong> {produto.aliquot_ipi}
            <br />
            <strong>Alíquota ICMS ST:</strong> {produto.aliquot_icms_st}
            <br />
            <strong>NCM SH:</strong> {produto.ncm_sh}
            <br />
            <strong>CST:</strong> {produto.cst}
            <br />
            <strong>CFOP:</strong> {produto.cfop}
            <br />
            <strong>Peso (kg):</strong> {produto.weight_kg}
            <br />
            <Button color="danger" className="mt-3" onClick={() => handleDelete(produto.id)}>
              Excluir
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
    </div>
  );
};

export default ListaProdutos;
