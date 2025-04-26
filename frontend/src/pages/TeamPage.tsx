// src/pages/TeamPage.tsx
import { useEffect, useState } from 'react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { AxiosError } from 'axios';

type Team = {
  idTeams: number;
  name: string;
  description?: string;
};

export default function TeamPage() {
  const { user, logout } = useAuth();
  const [teams, setTeams]     = useState<Team[]>([]);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [teamId, setTeamId]   = useState<number>(0);
  const [memberId, setMemberId]   = useState<number>(0);

  // 1) Cargar solo los equipos del usuario
  useEffect(() => {
    if (!user) return;
    api
      .get<Team[]>(`/teams?userId=${user.idUsers}`)
      .then(r => setTeams(r.data))
      .catch(console.error);
  }, [user]);

  // 2) Crear equipo incluyendo created_by
  const createTeam = async () => {
    if (!user) return alert('Debes iniciar sesión');
    try {
      const { data } = await api.post<Team>('/teams/:idTeams/members', {
        name: newName,
        description: newDesc,
        created_by: user.idUsers,          // <-- aquí
      });
      setTeams([...teams, data]);
      setNewName('');
      setNewDesc('');
    } catch (err) {
      const axiosError = err as AxiosError<{ message: string }>;
      if (axiosError.response?.data?.message) {
        alert(axiosError.response.data.message);
      } else {
        console.error(err);
        alert('Error al crear equipo');
      }
    }
  };

  // 3) Agregar miembro
  const addMember = async () => {
    try {
      await api.post(`/teams/${teamId}/members`, { user_id: memberId });
      alert('Miembro agregado');
      setMemberId(0);
    } catch (err) {
      const axiosError = err as AxiosError<{ message: string }>;
      if (axiosError.response?.data?.message) {
        alert(axiosError.response.data.message);
      } else {
        console.error(err);
        alert('Error al agregar miembro');
      }
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">Mis Equipos</h2>
        <button onClick={logout} className="text-red-600">Cerrar Sesión</button>
      </div>

      <ul className="mb-4">
        {teams.map(t => (
          <li key={t.idTeams} className="border p-2 mb-1">
            {t.name} (ID: {t.idTeams})
          </li>
        ))}
      </ul>

      {/* Formulario de creación */}
      <div className="mb-4">
        <input
          placeholder="Nombre de equipo"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <input
          placeholder="Descripción (opcional)"
          value={newDesc}
          onChange={e => setNewDesc(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <button
          onClick={createTeam}
          className="bg-green-600 text-white px-3"
        >
          Crear Equipo
        </button>
      </div>

      {/* Formulario de añadir miembro */}
      <div>
        <select
          onChange={e => setTeamId(Number(e.target.value))}
          className="border px-2 py-1 mr-2"
          defaultValue=""
        >
          <option value="" disabled>Selecciona equipo</option>
          {teams.map(t => (
            <option key={t.idTeams} value={t.idTeams}>
              {t.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="ID usuario"
          value={memberId || ''}
          onChange={e => setMemberId(Number(e.target.value))}
          className="border px-2 py-1 mr-2"
        />
        <button
          onClick={addMember}
          className="bg-blue-600 text-white px-3"
        >
          Agregar Miembro
        </button>
      </div>
    </div>
  );
}
