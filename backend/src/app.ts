import 'reflect-metadata'; // Import necesario para TypeORM
import express from 'express';
import { createConnection } from 'typeorm';
import userRoutes from './routes/user.routes';
import teamRoutes from './routes/team.routes';
import authRoutes from "./routes/auth.routes";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
createConnection()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });

  app.use(cors({
    origin: 'http://localhost:5173',       // Solo tu frontend
    methods: ['GET','POST','PUT','DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'], 
    credentials: true                       
  }));

  app.options('/', cors());

app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});