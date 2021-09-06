module.exports = function solveSudoku(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // находим нулевое значение и проверяем:
      if (matrix[i][j] == 0) {
        // цикл с возможными кандидатакми
        for (let n = 1; n <= 9; n++) {
          //проверяем кандидата(см ф-ю validate ниже) и если он подходит присвамваем в найденную ячейку
          if (validate(matrix, i, j, n)) {
            matrix[i][j] = n;
            // проверяем если solveSudoku не возвращает false значит матрица заполнена и возвращаем решенную матрицу
            if (solveSudoku(matrix)) {
              return matrix;
              // иначе продолжаем искать кандидата и оставояем в ячейке 0
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
}

function validate(matrix, row, col, num) {
  for (let i = 0; i < 9; i++) {
    //находим координаты для проверки и движения по малому квадрату
    const x = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const y = 3 * Math.floor(col / 3) + i % 3;
    //проверяем условия судоку
    if (matrix[row][i] == num || matrix[i][col] == num || matrix[x][y] == num) {
      return false;
    }
  }
  return true;
}