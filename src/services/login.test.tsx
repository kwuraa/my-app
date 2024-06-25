import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = "email@dio.bank";
  const mockPassword = "12345678";
  const mockName = "Pessoa Exemplo da Silva";

  it("Deve exibir um alert Boas vindas caso o email seja valido!", async () => {
    await login(mockEmail, mockPassword);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockName}!`);
  });

  it("Não deve exibir mensagem de boas vindas sem o email!", async () => {
    await login(mockEmail, mockPassword);
    expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo, ");
  });

  it("deve exibir um erro caso o email seja invalido ou senha seja invalido", async () => {
    await login("email@invalido.com", "");
    expect(mockAlert).toHaveBeenCalledWith("Email ou senha inválido!");
  });
});
