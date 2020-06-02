const validatedInformations = (user, res, option) => {
  const emailRegex = /\S+@\S+\.\S+/ //validar email
  const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/ //validar senha

  if (!user.name && option === 'signup')
    return res.status(400).send({ message: 'Nome não informado' })
  if (!user.email) {
    return res.status(400).send({ message: 'E-mail de não informado' })
  } else if (!user.email.match(emailRegex)) {
    return res.status(400).send({ message: 'E-mail informado é inválido' })
  }
  if (!user.password) {
    return res.status(400).send({ message: 'Senha não informada' })
  }
  if (option === 'signup') {
    if (!user.password.match(passwordRegex)) {
      return res.status(400).send({
        message:
          'Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, um caracter especial(@#$%) e tamanho entre 6-20.',
      })
    }
    if (!user.confirmPassword) {
      return res
        .status(400)
        .send({ message: 'Confirmação de Senha não informada' })
    } else if (user.password !== user.confirmPassword) {
      return res.status(400).send({ message: 'Senhas não conferem' })
    }
  }
}

module.exports = validatedInformations
