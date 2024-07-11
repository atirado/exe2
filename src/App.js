import React from 'react';
import Formulario from '../src/components/useref';
import Relogio from './components/useEffect';
import CalculadoraFatorial from '../src/components/menu';
import ListaDeTarefas from '../src/components/useCalback';
import Login from '../src/components/context';
import GerenciamentoOrcamento from '../src/components/app';

function App() {
  return (
    <div>
      <h1>Testando Componentes</h1>
      <h2>Formulário</h2>
      <Formulario />
      <h2>Relógio</h2>
      <Relogio />
      <h2>Calculadora de Fatorial</h2>
      <CalculadoraFatorial />
      <h2>Lista de Tarefas</h2>
      <ListaDeTarefas />
      <h2>Login</h2>
      <Login />
      <h2>Gerenciamento de Orçamento</h2>
      <GerenciamentoOrcamento />
    </div>
  );
}

export default App;
