import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Container } from 'reactstrap';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Seu conteúdo da página inicial aqui...</p>
      <Link href="/clientes">
        <a>Acessar a página de clientes</a>
      </Link>
    </div>
  );
};

export default Index;