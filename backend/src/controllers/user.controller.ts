import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import { Role } from '../models/rol';

export class UserController {
  // Obtener todos los usuarios
  static getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
      const userRepository = getRepository(User);
      const users = await userRepository.find();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving users', error });
    }
  };

  // Obtener un usuario por ID
  static getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { idUser } = req.params;
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ where: { idUsers: Number(idUser) } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving user', error });
    }
  };

  // Crear un nuevo usuario
  static createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password, role_id } = req.body;
      const userRepository = getRepository(User);
      
      // Verificar si el usuario ya existe
      const existingUser = await userRepository.findOne({where: { email }});
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      
      // Hashear la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = userRepository.create({
        name,
        email,
        password: hashedPassword,
        role_id,
      });
      await userRepository.save(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating user', error });
    }
  };

  // Actualizar un usuario
static updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { idUser } = req.params;
    const { name, email, role_id } = req.body;
    const userRepository = getRepository(User);
    const roleRepository = getRepository(Role);

    const userToUpdate = await userRepository.findOne({ where: { idUsers: Number(idUser) } });
    if (!userToUpdate) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Actualizar campos
    userToUpdate.name = name ?? userToUpdate.name;
    userToUpdate.email = email ?? userToUpdate.email;

    if (role_id) {
      const newRole = await roleRepository.findOne({ where: { idRoles: role_id } });
      if (!newRole) {
        return res.status(400).json({ message: 'Invalid role ID' });
      }
      userToUpdate.role_id = newRole;
    }

    await userRepository.save(userToUpdate);
    return res.json(userToUpdate);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating user', error });
  }
};

  // Eliminar un usuario
  static deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { idUser } = req.params;
      const userRepository = getRepository(User);
      const userToDelete = await userRepository.findOne({where: {idUsers: Number(idUser)}});
      if (!userToDelete) {
        return res.status(404).json({ message: 'User not found' });
      }
      await userRepository.remove(userToDelete);
      return res.json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting user', error });
    }
  };
}
