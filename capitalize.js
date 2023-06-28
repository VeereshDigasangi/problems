function capitalizeFirst (arr) {
    let newArr=[]
    if(arr.length>0)    {
    newArr.push(arr[0].toUpperCase())
    newArr= newArr.concat(capitalizeFirst(arr.slice(1)))
    }
    return newArr;
  }
  
  console.log( capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']