import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { PrismaClient } from '@prisma/client';
import routes from './routes';

const app = express();
const prisma = new PrismaClient();

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Car Management API',
      version: '0.0.1',
      description: 'API para gerenciamento de veículos',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  apis: ['./src/routes.ts', './src/app/vehicle/route/index.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/', routes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});

export default app; 