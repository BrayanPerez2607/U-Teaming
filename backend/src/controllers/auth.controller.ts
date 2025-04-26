// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { User } from '../models/user';

export class AuthController {
  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const repo = getRepository(User);
    const user = await repo.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    // Devuelve solo los datos del usuario (sin password)
    const { password: _, ...userData } = user;
    return res.json({ user: userData });
  };
}
