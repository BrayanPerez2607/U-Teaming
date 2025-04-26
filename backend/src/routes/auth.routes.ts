// src/routes/auth.routes.ts
import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { asyncHandler } from "../utils/asyncHandler";

const router: Router = Router();

router.post('/login', asyncHandler(AuthController.login));

export default router;
