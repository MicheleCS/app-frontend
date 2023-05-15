const validatorEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.')
}

const validatorPassword = (password) => {
  return password?.toString().lenght > 6
}

export {
  validatorEmail,
  validatorPassword
}