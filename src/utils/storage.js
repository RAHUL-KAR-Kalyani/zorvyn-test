export const loadData = () => JSON.parse(localStorage.getItem("transactions") || "null");
export const saveData = (data) => localStorage.setItem("transactions", JSON.stringify(data));
