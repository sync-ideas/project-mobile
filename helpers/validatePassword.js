export const validatePassword = (password) => {
  const re = /[A-Za-z0-9]+#/;
  return re.test(String(password));
};