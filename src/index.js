module.exports = function towelSort (matrix) {
  let newArr = [];
  if (matrix) {
      matrix.forEach((item, j) => {
          if (j % 2) {
              item.reverse();
          }
          newArr = newArr.concat(item);
      });
  }
  return newArr;
}
