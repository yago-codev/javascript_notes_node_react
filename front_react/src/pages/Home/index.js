import React from 'react';
import { Column, Section, Title, Container } from 'rbx';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import presentationImage from '../../assets/images/presentation.png';

import './index.scss';

const Home = () => {
  return (
    <>
      <Header />

      <Section size="medium" className="home">
        <Container>
          <Column.Group>
            <Column size={5}>
              <Title size={2} spaced className="has-text-white">
                Javascript Note: Crie notas facilmente.
              </Title>
              <Title size={5} spaced className="has-text-white" subtitle>
                Backend: API NodeJS com Express e MongoDB.
                Front: React.
              </Title>
              <Link to="/register" className="button is-outlined is-white is-large">
                <strong>Criar Conta Gratuíta</strong>
              </Link>
            </Column>
            <Column size={6} offset={1}>
              <img src={presentationImage} alt="Apresentação da aplicação sendo exibida notebook e tablet" />
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </>
  );
}

export default Home;