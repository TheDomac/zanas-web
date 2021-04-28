const shuffleArray = (array: any) => {
  let index = -1;
  const lastIndex = array.length - 1;
  const result = array.slice();
  while (++index < array.length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
};

export default shuffleArray;
