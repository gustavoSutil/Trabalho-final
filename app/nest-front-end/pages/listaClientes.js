import { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import axios from 'axios';

const ListaEntidades = () => {
  const [entidades, setEntidades] = useState([]);

  useEffect(() => {
    async function fetchEntidades() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/client/');
        setEntidades(response.data);
      } catch (error) {
        console.error('Erro ao carregar as entidades:', error);
      }
    }
    fetchEntidades();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://127.0.0.1:8000/api/client/'+id);
      // Atualize a lista de entidades após a exclusão
      setEntidades(entidades.filter((entidade) => entidade.id !== id));
    } catch (error) {
      console.error('Erro ao excluir a entidade:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Clientes</h1>
      <ListGroup>
        {entidades.map((entidade) => (
          <ListGroupItem key={entidade.id}>
            <strong>ID:</strong> {entidade.id}
            <br />
            <strong>CNPJ:</strong> {entidade.cnpj}
            <br />
            <strong>Nome:</strong> {entidade.name}
            <br />
            <strong>Inscrição Estadual:</strong> {entidade.ie}
            <br />
            <strong>Razão Social:</strong> {entidade.razao_social}
            <br />
            <strong>Telefone:</strong> {entidade.phone_number}
            <br />
            <strong>E-mail:</strong> {entidade.email}
            <br />
            <strong>CEP:</strong> {entidade.cep}
            <br />
            <strong>Endereço:</strong> {entidade.street}
            <br />
            <strong>Número:</strong> {entidade.number}
            <br />
            <strong>Cidade:</strong> {entidade.city}
            <br />
            <strong>Estado:</strong> {entidade.UF}
            <br />
            <strong>Observação:</strong> {entidade.observation}
            <br />
            <Button color="danger" className="mt-3" onClick={() => handleDelete(entidade.id)}>
              Excluir
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ListaEntidades;