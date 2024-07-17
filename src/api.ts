const conta = {
  email: "email@dio.bank",
  password: "12345678",
  name: "Leia Organa",
  balance: 2000.0,
  id: "28",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
