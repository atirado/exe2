import React, { useState, useEffect } from 'react';

const Relogio = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMostrarMensagem(true);
      setTimeout(() => {
        setMostrarMensagem(false);
      }, 3000); // Mensagem desaparece após 3 segundos
    }, 5000); // Mensagem aparece após 5 segundos
  }, []);

  return (
    <div>
      <h1>Horário atual: {hora}</h1>
      {mostrarMensagem && <p>Mensagem que aparece e desaparece</p>}
    </div>
  );
};

export default Relogio;
