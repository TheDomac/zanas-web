const HEX = "0123456789ABCDEF";

const getRandomColor = () => {
  return Array.from(Array(6)).reduce(
    (prev) => `${prev}${HEX[Math.floor(Math.random() * HEX.length)]}`,
    "#"
  );
};

export default getRandomColor;
