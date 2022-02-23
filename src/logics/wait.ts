export const delay = async (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
