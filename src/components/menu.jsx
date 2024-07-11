import React, { useState, useMemo } from 'react';

const CalculadoraFatorial = () => {
  const [numero, setNumero] = useState(0);

  const calcularFatorial = (num) => {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  };

  const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

  return (
    <div>
      <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
      <p>O fatorial de {numero} é: {fatorial}</p>
    </div>
  );
};

export default CalculadoraFatorial;
