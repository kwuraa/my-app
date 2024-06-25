import { api } from "../api";

export const login = async (email: string, password: string): Promise<void> => {
  const data: any = await api;

  if (email !== data.email || password !== data.password) {
    // eslint-disable-next-line no-lone-blocks
    return alert("Email ou senha inválido!");
  }
  alert(`Bem vindo, ${data.name}!`);
};
