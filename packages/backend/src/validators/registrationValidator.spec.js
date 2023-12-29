import { registrationValidator } from './registrationValidator';
import { isCNPJ, isCPF } from 'brazilian-values';

jest.mock('brazilian-values');

describe('Registration Validator', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      body: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  test('should return error if personType is physicalPerson and required fields are missing', () => {
    req.body.personType = 'physicalPerson';

    registrationValidator.validate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Todos os campos para pessoa física são obrigatórios.'
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('should return error if personType is physicalPerson and CPF is invalid', () => {
    isCPF.mockReturnValue(false);

    req.body.name = 'Camila';
    req.body.bornDate = '10/10/2023';
    req.body.personType = 'physicalPerson';
    req.body.cpf = '11111111111';

    registrationValidator.validate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'CPF inválido.' });
    expect(next).not.toHaveBeenCalled();
  });

  test('should return error if personType is legalPerson and required fields are missing', () => {
    req.body.personType = 'legalPerson';

    registrationValidator.validate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Todos os campos para pessoa jurídica são obrigatórios.'
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('should return error if personType is legalPerson and CNPJ is invalid', () => {
    isCNPJ.mockReturnValue(false);

    req.body.socialReason = 'Company';
    req.body.openingDate = '10/10/2023';
    req.body.personType = 'legalPerson';
    req.body.cnpj = '12345678901234';

    registrationValidator.validate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'CNPJ inválido.' });
    expect(next).not.toHaveBeenCalled();
  });

  test('should return error if required common fields are missing', () => {
    registrationValidator.validate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Todos os campos comuns são obrigatórios.' });
    expect(next).not.toHaveBeenCalled();
  });

  test('should call next if all validations pass', () => {
    isCPF.mockReturnValue(true);

    req.body.personType = 'physicalPerson';
    req.body.name = 'Camila';
    req.body.cpf = '01234567890';
    req.body.bornDate = '10/10/2023';
    req.body.emailAddress = 'camila@email.com';
    req.body.phone = '1234567890';
    req.body.password = 'password';

    registrationValidator.validate(req, res, next);

    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});
