import { Router } from 'express';
import vehicleRoutes from './app/vehicle/route';

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verifica o status da API
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API está funcionando
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 */
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Vehicle routes with prefix
router.use('/api/vehicle', vehicleRoutes);

export default router; 