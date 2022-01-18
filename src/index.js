// You should implement your task here.

module.exports = function towelSort (matrix) {

 if (!matrix) {
   return [];
 }

 for (let str of matrix) {
   if (matrix.indexOf(str) % 2 != 0) {
    str.sort((a, b) => b - a);
   }
 }

 return matrix.flat();
}
