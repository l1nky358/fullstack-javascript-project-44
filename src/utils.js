
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateOperation = () => {
  const operations = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operations.length);
  return operations[index];
};
