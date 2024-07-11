import React, { useState, useCallback } from 'react';

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = useCallback(() => {
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  }, [tarefas, novaTarefa]);

  return (
    <div>
      <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTarefas;
