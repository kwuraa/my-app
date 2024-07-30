const dioBank = {
  login: false,
};

export const getAllLocalStorage = () => {
  return localStorage.getItem("diobank");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};
