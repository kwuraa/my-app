const conta = {
  email: "kwuraa@dio.bank",
  password: "12345678",
  name: "Matheus Morais Kawamura",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
