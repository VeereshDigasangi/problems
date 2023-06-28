function reverseArrayWithN(array, N) {
    const reversed = [];
    const length = array.length;
    const normalizedN = N % length;
    let counter=0;


    let res=array.slice(0,-N)
    console.log(res,array)
}
  
  // Example usage
  const array = [2, 4, 6, 9, 2, 1, 5, 7];
  const N = 2;
  const result = reverseArrayWithN(array, N);
  
  console.log(result); // [7, 5, 1, 2, 9, 6, 4, 2]
  