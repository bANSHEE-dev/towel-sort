module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  let newArr = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if((i+1) % 2 === 0){
      for (let y = matrix[i].length - 1; j >= 0 ; j--) {
        newArr.push(matrix[i][j])
      }
    } else{
      for (let j = 0; j < matrix[i].length; j++) {
        newArr.push(matrix[i][j])
      }
    } 
  }
  return newArr;
}
