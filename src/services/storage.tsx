interface IDioBank {
  login: Boolean;
}

const dioBank = {
  login: false,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("diobank");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};

export const changeLocalStorage = (diobank: IDioBank) => {
  localStorage.setItem("diobank", JSON.stringify(diobank));
};
