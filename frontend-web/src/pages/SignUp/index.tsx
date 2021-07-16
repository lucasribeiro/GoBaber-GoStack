import React from 'react';
import { FiArrowLeft, FiLogIn, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Backgroud } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Backgroud />
    <Content>
      <img src={logoImg} alt="Gobarber" />

      <form>
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
      </form>

      <a href="login">
        <FiArrowLeft />
        voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
