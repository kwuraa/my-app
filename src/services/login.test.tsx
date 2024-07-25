
import { login } from "./login";

// const mockSetIsLoggedIn = jest.fn()

// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//   ...jest.requireActual('react'), useContext: () => ({
//     setIsLoggedIn: mockSetIsLoggedIn
//   })
// })) 

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom') as any,
//   useNavigate: () => mockNavigate
// }))

describe("login", () => {

  const mockEmail = "email@dio.bank";

  it("Deve exibir um alert Boas vindas caso o email seja valido!", async () => {
    const response = await login(mockEmail);
    expect(response).toBeTruthy()
  });


  it("deve exibir um erro caso o email seja invalido ou senha seja invalido", async () => {
    const response = await login("email@invalido.com");
    expect(response).toBeFalsy()
  });
});
