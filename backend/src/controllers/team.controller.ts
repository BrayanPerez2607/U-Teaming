import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Team } from '../models/team';
import { User } from '../models/user';
import { TeamMember } from '../models/team-member';

export class TeamController {
  // Obtener todos los equipos
  static getTeams = async (req: Request, res: Response) => {
    try {
      const repo = getRepository(Team);

      // Ejecutar la consulta para obtener todos los equipos
      const teams = await repo
        .createQueryBuilder('team')
        .leftJoinAndSelect('team.members', 'tm') // Incluye los miembros del equipo
        .leftJoinAndSelect('team.created_by', 'creator') // Incluye el creador del equipo
        .getMany();

      return res.json(teams);
    } catch (e) {
      console.error('Error obteniendo equipos:', e);
      return res.status(500).json({ message: 'Error obteniendo equipos', error: e });
    }
  };

  // Obtener un equipo por ID
  static getTeamById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { idTeam } = req.params;
      const teamRepository = getRepository(Team);
      const team = await teamRepository.findOne({
        where: { idTeams: Number(idTeam) },
        relations: ['created_by', 'members']
      });
      if (!team) {
        return res.status(404).json({ message: 'Team not found' });
      }
      return res.json(team);
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving team', error });
    }
  };

  // Crear un nuevo equipo
  static createTeam = async (req: Request, res: Response) => {
    try {
      const { name, description, created_by } = req.body;

      if (!created_by || typeof created_by !== 'number') {
        return res.status(400).json({ message: 'Debe enviar un created_by válido' });
      }

      const userRepo = getRepository(User);
      const creator = await userRepo.findOne({ where: { idUsers: created_by } });

      if (!creator) {
        return res.status(404).json({ message: 'Usuario creador no existe' });
      }

      const teamRepo = getRepository(Team);
      const team = teamRepo.create({
        name,
        description,
        created_by: creator,
      });

      console.log('Equipo a guardar:', team);

      const saved = await teamRepo.save(team);
      return res.status(201).json(saved);
    } catch (error) {
      console.error('Error al crear equipo:', error);
      return res.status(500).json({ message: 'Error al crear equipo', error });
    }
  };

  // Actualizar un equipo
  static updateTeam = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { idTeam } = req.params;
      const { name, description } = req.body;
      const teamRepository = getRepository(Team);

      const teamToUpdate = await teamRepository.findOne({ where: { idTeams: Number(idTeam) } });
      if (!teamToUpdate) {
        return res.status(404).json({ message: 'Team not found' });
      }

      // Actualizar campos
      teamToUpdate.name = name ?? teamToUpdate.name;
      teamToUpdate.description = description ?? teamToUpdate.description;

      await teamRepository.save(teamToUpdate);
      return res.json(teamToUpdate);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating team', error });
    }
  };

  // Eliminar un equipo
  static deleteTeam = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { idTeam } = req.params;
      const teamRepository = getRepository(Team);

      const teamToDelete = await teamRepository.findOne({ where: { idTeams: Number(idTeam) } });
      if (!teamToDelete) {
        return res.status(404).json({ message: 'Team not found' });
      }

      await teamRepository.remove(teamToDelete);
      return res.json({ message: 'Team deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting team', error });
    }
  };

  static addMember = async (req: Request, res: Response) => {
    try {
      const teamId = Number(req.params.idTeam);
      const { user_id } = req.body;
      const teamRepo = getRepository(Team);
      const userRepo = getRepository(User);

      const team = await teamRepo.findOne({ where: { idTeams: Number(teamId) } });
      if (!team) return res.status(404).json({ message: 'Equipo no existe' });

      if (!user_id || typeof user_id !== 'number') {
        return res.status(400).json({ message: 'Debe enviar un user_id válido' });
      }

      const user = await userRepo.findOne({ where: { idUsers: user_id } }); // Corrección aquí
      if (!user) return res.status(404).json({ message: 'Usuario no existe' });

      const tmRepo = getRepository(TeamMember);
      const tm = tmRepo.create({ team_id: team, user_id: user });
      const saved = await tmRepo.save(tm);
      return res.status(201).json(saved);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error agregando miembro', error });
    }
  };
}

