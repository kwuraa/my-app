const conta = {
  email: "email@dio.bank",
  password: "12345678",
  name: "Leia Organa",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
