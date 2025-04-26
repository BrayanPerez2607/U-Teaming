// src/pages/RegisterPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '', email: '', password: '', role_id: 1
  });
  const nav = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // POST /api/users → crea usuario y devuelve el usuario creado
      await api.post('/users', form);
      alert('Usuario registrado con éxito');
      nav('/login');
    } catch {
      alert('Error al registrar');
    }
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl mb-4">Registro</h2>
      {(['name','email','password'] as const).map(f => (
        <input
          key={f}
          type={f === 'email' ? 'email' : f === 'password' ? 'password' : 'text'}
          placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
          value={form[f]}
          onChange={e => setForm({ ...form, [f]: e.target.value })}
          className="w-full border px-2 py-1 mb-2"
          required
        />
      ))}
      <select
        value={form.role_id}
        onChange={e => setForm({ ...form, role_id: +e.target.value })}
        className="w-full border px-2 py-1 mb-4"
      >
        <option value={1}>Estudiante</option>
        <option value={2}>Profesor</option>
        <option value={3}>Administrador</option>
      </select>
      <button type="submit" className="w-full bg-blue-600 text-white py-1">
        Crear Cuenta
      </button>
    </form>
  );
}
