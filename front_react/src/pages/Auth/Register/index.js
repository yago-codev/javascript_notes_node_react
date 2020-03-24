import React from 'react';
import { Column, Section, Title, Container, Card } from 'rbx';

import Header from '../../../components/Header';

import logoImage from '../../../assets/images/logo.png';

import './index.scss';

const Register = () => (
  <>
    <Header />

    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={3}>
            <Card>
              <Card.Content>
                <Section>
                  <Column.Group centered>
                    <Column size={12}>
                      <img src={logoImage} />
                    </Column>
                  </Column.Group>

                  <Column.Group>
                    <Column size={12}>
                      <Title size={6} className="has-text-grey has-text-centered">
                        Suas notas na nuvem
                      </Title>
                    </Column>
                  </Column.Group>
                </Section>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </>
)

export default Register;