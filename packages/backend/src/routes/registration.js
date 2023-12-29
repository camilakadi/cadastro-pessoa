import express from 'express';
import { registrationController } from '../controllers/registrationController.js';
import { registrationValidator } from '../validators/registrationValidator.js';

const router = express.Router();

router.get('/registration', (req, res) => {
  res.send('Get registration completed');
});

router.post('/registration', registrationValidator.validate, registrationController.register);

export default router;
