import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = "kwuraa@dio.bank";

  it("Deve exibir um alert Boas vindas caso o email seja valido!", async () => {
    await login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockEmail}!`);
  });

  it("Não deve exibir mensagem de boas vindas sem o email!", async () => {
    await login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo, ");
  });

  it("deve exibir um erro caso o email seja invalido", async () => {
    await login("email@invalido.com");
    expect(mockAlert).toHaveBeenCalledWith("Email inválido!");
  });
});
