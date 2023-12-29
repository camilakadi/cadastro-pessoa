import { registrationController } from './registrationController.js';

describe('Registration Controller', () => {
  test('register should return success response', () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    registrationController.register(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Cadastro realizado com sucesso.'
    });
  });
});
