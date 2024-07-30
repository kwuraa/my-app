import { createLocalStorage, getAllLocalStorage } from "./storage";

const dioBank = {
  login: false,
};
describe("storage", () => {
  it("deve retornar o objeto no localstorage", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("deve criar o objeto no local storage", () => {
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
