import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Backgroud } from './styles';

const SignUp: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function handleSubmited(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Backgroud />
      <Content>
        <img src={logoImg} alt="Gobarber" />

        <Form onSubmit={handleSubmited}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
