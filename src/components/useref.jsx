import React, { useRef } from 'react';

const Formulario = () => {
  const inputRef = useRef(null);

  const limparCampo = () => {
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={limparCampo}>Limpar</button>
    </div>
  );
};

export default Formulario;
