const validatedInformations = (user, option) => {
  const emailRegex = /\S+@\S+\.\S+/ //validar email
  const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/ //validar senha

  if (!user.name && option === 'signup') return { error: 'Nome não informado' }
  if (!user.email) {
    return { error: 'E-mail de não informado' }
  } else if (!user.email.match(emailRegex)) {
    return { error: 'E-mail informado é inválido' }
  }
  if (!user.password) {
    return { error: 'Senha não informada' }
  }
  if (option === 'signup') {
    if (!user.password.match(passwordRegex)) {
      return {
        error:
          'Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, um caracter especial(@#$%) e tamanho entre 6-20.',
      }
    }
    if (!user.confirmPassword) {
      return { error: 'Confirmação de Senha não informada' }
    } else if (user.password !== user.confirmPassword) {
      return { error: 'Senhas não conferem' }
    }
  }

  return false
}

module.exports = validatedInformations
