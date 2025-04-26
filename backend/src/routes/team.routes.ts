import { Router } from 'express';
import { TeamController } from '../controllers/team.controller';
import { asyncHandler } from '../utils/asyncHandler';

const router: Router = Router();

// Obtener todos los equipos
router.get('/', asyncHandler(TeamController.getTeams));

// Obtener un equipo por ID
router.get('/:idTeam', asyncHandler(TeamController.getTeamById));

// Crear un nuevo equipo
router.post('/:idTeam/members', asyncHandler(TeamController.addMember));
router.post('/', asyncHandler(TeamController.createTeam))

// Actualizar un equipo existente
router.put('/:idTeam', asyncHandler(TeamController.updateTeam));

// Eliminar un equipo
router.delete('/:idTeam', asyncHandler(TeamController.deleteTeam));

router.post('/add-member', asyncHandler(TeamController.addMember));

export default router;
