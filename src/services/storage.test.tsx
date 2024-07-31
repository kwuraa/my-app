import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
};
describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  it("deve retornar o objeto no localstorage", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("deve criar o objeto no local storage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("deve alterar o valor do objeto no local Storage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
