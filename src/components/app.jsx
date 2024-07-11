import React, { useState } from 'react';

const GerenciamentoOrcamento = () => {
  const [saldo, setSaldo] = useState(0);
  const [despesas, setDespesas] = useState([]);
  const [novaDespesa, setNovaDespesa] = useState('');
  const [valorDespesa, setValorDespesa] = useState(0);

  const adicionarDespesa = () => {
    if (novaDespesa.trim() !== '' && valorDespesa !== 0) {
      const novaDespesaObj = {
        descricao: novaDespesa,
        valor: valorDespesa
      };
      setDespesas([...despesas, novaDespesaObj]);
      setSaldo(saldo - valorDespesa);
      setNovaDespesa('');
      setValorDespesa(0);
    }
  };

  return (
    <div>
      <h2>Gerenciamento de Orçamento Pessoal</h2>
      <p>Saldo: R$ {saldo}</p>
      <input type="text" value={novaDespesa} onChange={(e) => setNovaDespesa(e.target.value)} placeholder="Descrição da despesa" />
      <input type="number" value={valorDespesa} onChange={(e) => setValorDespesa(Number(e.target.value))} placeholder="Valor da despesa" />
      <button onClick={adicionarDespesa}>Adicionar Despesa</button>
      <h3>Despesas</h3>
      <ul>
        {despesas.map((despesa, index) => (
          <li key={index}>{despesa.descricao} - R$ {despesa.valor}</li>
        ))}
      </ul>
    </div>
  );
};

export default GerenciamentoOrcamento;
