export const convertNum = (num: number) => {
  const NumArray = num.toString().split("").reverse();
  const mappedArray = NumArray.map((number, i) => {
    if (i % 3 === 0 && i && NumArray.length - 1) {
      return number + ",";
    }
    return number;
  })
    .reverse()
    .join("");

  return mappedArray;
};
