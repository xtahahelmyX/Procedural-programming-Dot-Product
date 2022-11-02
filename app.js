function dot_product(v1, v2)
{
 var dotProduct = 0;
 for (i in v1) {
   dotProduct = dotProduct + v1[i] * v2[i];
 }
 return dotProduct;

}

function nVector(vec1, vec2)
{
 console.log("Dot Product:")
 for (let i = 0; i < vec1.length; i++)
  {
   console.log(
     ` v1: [${vec1[i]}]
      v2: [${vec2[i]}] 
      equal [${dot_product(vec1[i], vec2[i])}]`
   );
 }
}
let firstArray = [
 [2, 5, 3],
 [3, 7, 6],
 [4, 6, 7],
 [8, 7, 9],
];
let secondArray = [
 [8, 9, 3],
 [6, 4, 8],
 [7, 7, 9],
 [4, 5, 3],
];
nVector(firstArray, secondArray);