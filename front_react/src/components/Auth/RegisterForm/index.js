import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Button, Field, Label, Control, Input, Column, Help } from 'rbx';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  if (redirectToLogin) {
    return <Redirect to={{pathname: '/login'}} />
  }

  return (
    <>
      <Column.Group centered>
        <form>
          <Column size={12}>
            <Field>
              <Label size="small">Nome:</Label>
              <Control>
                <Input
                  type="name"
                  name="name"
                  value={name}
                  required
                  onChange={e => setName(e.target.value)}
                />
              </Control>
            </Field>

            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </Control>
            </Field>

            <Field>
              <Label size="small">Senha:</Label>
              <Control>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </Control>
            </Field>
            
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a 
                      className="button is-white has-text-custom-purple"
                      onClick={e => setRedirectToLogin(true)}
                    >
                      Login
                    </a>
                  </Column>

                  <Column>
                    <Button color="custom-purple" outlined>
                      Registre-se
                    </Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            { error && <Help color="danger">Email ou Senha incorretos!</Help> }
          </Column>
        </form>
      </Column.Group>
    </>
  )
}