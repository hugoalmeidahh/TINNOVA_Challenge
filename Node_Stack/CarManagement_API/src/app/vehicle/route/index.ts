import { Router } from 'express';
import { VehicleHandler } from '../handler/VehicleHandler';

const router = Router();
const handler = new VehicleHandler();

/**
 * @swagger
 * components:
 *   schemas:
 *     Vehicle:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         vehicle:
 *           type: string
 *         brand:
 *           type: string
 *         year:
 *           type: integer
 *         description:
 *           type: string
 *         sold:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     VehicleInput:
 *       type: object
 *       required:
 *         - vehicle
 *         - brand
 *         - year
 *         - description
 *       properties:
 *         vehicle:
 *           type: string
 *         brand:
 *           type: string
 *         year:
 *           type: integer
 *         description:
 *           type: string
 *         sold:
 *           type: boolean
 */

/**
 * @swagger
 * /api/vehicle:
 *   get:
 *     summary: Retorna todos os veículos
 *     tags: [Vehicles]
 *     responses:
 *       200:
 *         description: Lista de veículos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicle'
 */
router.get('/', handler.getAllVehicles.bind(handler));

/**
 * @swagger
 * /api/vehicle/{id}:
 *   get:
 *     summary: Retorna um veículo pelo ID
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Veículo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 *       404:
 *         description: Veículo não encontrado
 */
router.get('/:id', handler.getVehicleById.bind(handler));

/**
 * @swagger
 * /api/vehicle:
 *   post:
 *     summary: Cria um novo veículo
 *     tags: [Vehicles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VehicleInput'
 *     responses:
 *       201:
 *         description: Veículo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 *       400:
 *         description: Dados inválidos
 */
router.post('/', handler.createVehicle.bind(handler));

/**
 * @swagger
 * /api/vehicle/{id}:
 *   put:
 *     summary: Atualiza um veículo existente
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VehicleInput'
 *     responses:
 *       200:
 *         description: Veículo atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 *       404:
 *         description: Veículo não encontrado
 *       400:
 *         description: Dados inválidos
 */
router.put('/:id', handler.updateVehicle.bind(handler));

/**
 * @swagger
 * /api/vehicle/{id}:
 *   patch:
 *     summary: Atualiza parcialmente um veículo existente
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VehicleInput'
 *     responses:
 *       200:
 *         description: Veículo atualizado parcialmente com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 *       404:
 *         description: Veículo não encontrado
 *       400:
 *         description: Dados inválidos
 */
router.patch('/:id', handler.patchVehicle.bind(handler));

/**
 * @swagger
 * /api/vehicle/{id}:
 *   delete:
 *     summary: Remove um veículo
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Veículo removido com sucesso
 *       404:
 *         description: Veículo não encontrado
 */
router.delete('/:id', handler.deleteVehicle.bind(handler));

export default router; 