export const getlettersName = (name: string): string =>
  name
    .split(" ")
    .map((item) => item[0])
    .join("");
