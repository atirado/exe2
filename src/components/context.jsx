import React, { useState, useContext } from 'react';

// Criando um contexto para armazenar o estado do usuário logado
const UserContext = React.createContext();

const Login = () => {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim() !== '') {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <UserContext.Provider value={{ username }}>
          <Dashboard />
        </UserContext.Provider>
      )}
    </div>
  );
};

const Dashboard = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h2>Bem-vindo, {username}!</h2>
      <button onClick={() => console.log('Logout')}>Logout</button>
    </div>
  );
};

export default Login;
