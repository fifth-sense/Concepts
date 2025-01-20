function transformMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const rowsToZero = new Set();
    const colsToZero = new Set();
  
    // Find rows and columns that need to be zeroed out
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 0) {
          rowsToZero.add(i);
          colsToZero.add(j);
        }
      }
    }
  
    // Update the matrix based on rows and columns found
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (!rowsToZero.has(i) && !colsToZero.has(j)) {
          continue;
        }
        matrix[i][j] = 0;
      }
    }
  
    return matrix;
  }
  
  // Example input matrix
  const inputMatrix = [
    [1, 0, 0, 4],
    [5, 8, 9, 7],
    [3, 0, 8, 6],
    [4, 8, 9, 8],
    [6, 1, 4, 9]
  ];

//  output= [
//     [ 0, 0, 0, 0 ],
//     [ 5, 0, 0, 7 ],
//     [ 0, 0, 0, 0 ],
//     [ 4, 0, 0, 8 ],
//     [ 6, 0, 0, 9 ]
//   ]
  
  
  // Calling the function with the example input matrix
  const outputMatrix = transformMatrix(inputMatrix);
  console.log(outputMatrix);
  