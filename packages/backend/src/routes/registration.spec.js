import request from 'supertest';
import express from 'express';
import Router from './registration.js';
import { registrationController } from '../controllers/registrationController.js';

jest.mock('../controllers/registrationController.js');

jest.mock('../validators/registrationValidator.js', () => ({
  registrationValidator: {
    validate: (req, res, next) => {
      next();
    }
  }
}));

const app = express();
app.use(express.json());
app.use('/', Router);

describe('Registration routes', () => {
  test('GET /registration should return "Get registration completed"', async () => {
    const response = await request(app).get('/registration');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Get registration completed');
  });

  test('POST /registration with valid data should return success', async () => {
    registrationController.register.mockImplementation((req, res) => {
      res.status(200).send('Registration completed');
    });

    const validRegistrationData = {
      personType: 'legalPerson',
      emailAddress: 'a@a',
      socialReason: '111',
      cnpj: '11.111.111/1111-11',
      openingDate: '2023-12-06',
      phone: '(11) 11111-1111',
      password: '111'
    };

    const response = await request(app).post('/registration').send(validRegistrationData);
    expect(response.status).toBe(200);
  });

  test('POST /registration with invalid data should return error', async () => {
    registrationController.register.mockImplementation((req, res) => {
      res.status(400).send('Registration failed');
    });

    const invalidRegistrationData = {
      personType: 'legalPerson',
      emailAddress: 'a@a',
      socialReason: '111',
      cnpj: '11.111.111/1111-11',
      openingDate: '2023-12-06',
      phone: '(11) 11111-1111',
      password: '111'
    };

    const response = await request(app).post('/registration').send(invalidRegistrationData);
    expect(response.status).toBe(400);
  });
});
