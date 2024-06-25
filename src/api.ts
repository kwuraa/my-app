const conta = {
  email: "email@dio.bank",
  password: "12345678",
  name: "Pessoa Exemplo da Silva",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
