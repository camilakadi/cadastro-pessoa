export const registrationController = {
  register: (req, res) => {
    res.status(200).json({ success: true, message: 'Cadastro realizado com sucesso.' });
  }
};
