// src/pages/LoginPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail]     = useState('');
  const [password, setPass]   = useState('');
  const { login }             = useAuth();
  const nav                    = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Asume que tu backend expone: POST /api/auth/login → { user: {...} }
      const { data } = await api.post('/auth/login', { email, password });
      login(data.user);
      nav('/teams');
    } catch {
      alert('Credenciales inválidas');
    }
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full border px-2 py-1 mb-2"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPass(e.target.value)}
        className="w-full border px-2 py-1 mb-4"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-1"
      >
        Entrar
      </button>
    </form>
  );
}
