import { PrismaClient } from '@prisma/client';
import '@jest/globals';

const prisma = new PrismaClient();

beforeAll(async () => {
  // Setup do banco de dados de teste
  await prisma.$connect();
});

afterAll(async () => {
  // Limpeza e desconexão do banco de dados de teste
  await prisma.$disconnect();
}); 