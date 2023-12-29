import { isCNPJ, isCPF } from 'brazilian-values';

export const registrationValidator = {
  validate: (req, res, next) => {
    const {
      name,
      cpf,
      bornDate,
      socialReason,
      cnpj,
      openingDate,
      emailAddress,
      personType,
      phone,
      companyBornDate,
      companyPhone,
      password
    } = req.body;

    if (personType === 'physicalPerson') {
      if (!name || !cpf || !bornDate) {
        return res.status(400).json({
          error: 'Todos os campos para pessoa física são obrigatórios.'
        });
      }

      if (!isCPF(cpf)) {
        return res.status(400).json({ error: 'CPF inválido.' });
      }
    }

    if (personType === 'legalPerson') {
      if (!socialReason || !cnpj || !openingDate) {
        return res.status(400).json({
          error: 'Todos os campos para pessoa jurídica são obrigatórios.'
        });
      }

      if (!isCNPJ(cnpj)) {
        return res.status(400).json({ error: 'CNPJ inválido.' });
      }
    }

    if (!emailAddress || !personType || !phone || !password) {
      return res.status(400).json({ error: 'Todos os campos comuns são obrigatórios.' });
    }

    next();
  }
};
