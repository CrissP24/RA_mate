import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [maintenance, setMaintenance] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const validUsername = 'estudiante15';
    const validPassword = 'matematicas2025';

    if (username === validUsername && password === validPassword) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setMaintenance(true);
      }, 300000); // 5 minutos
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <span className="ms-2">Cargando...</span>
      </div>
    );
  }

  if (maintenance) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="alert alert-danger" role="alert">
          Servidor en mantenimiento
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 login-page">
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese usuario"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese contraseña"
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default LoginPage;