import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it("Deve exibir um alert: Boas vindas, Matheus!", () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith("Boas vindas, Matheus!");
  });
});
