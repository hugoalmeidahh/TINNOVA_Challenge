import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpa o banco de dados
  await prisma.vehicle.deleteMany();

  // Cria veículos de exemplo
  const vehicles = [
    {
      vehicle: 'Civic',
      brand: 'Honda',
      year: 2020,
      description: 'Sedan compacto com excelente economia de combustível',
      sold: false,
    },
    {
      vehicle: 'Corolla',
      brand: 'Toyota',
      year: 2021,
      description: 'Sedan confiável e econômico',
      sold: true,
    },
    {
      vehicle: 'Golf',
      brand: 'Volkswagen',
      year: 2019,
      description: 'Hatchback esportivo alemão',
      sold: false,
    },
    {
      vehicle: 'Focus',
      brand: 'Ford',
      year: 2022,
      description: 'Hatchback com boa performance',
      sold: false,
    },
    {
      vehicle: 'X5',
      brand: 'BMW',
      year: 2021,
      description: 'SUV de luxo com alto desempenho',
      sold: true,
    },
  ];

  for (const vehicle of vehicles) {
    await prisma.vehicle.create({
      data: vehicle,
    });
  }

  console.log('Banco de dados populado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 