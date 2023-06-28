function same(arr1,arr2){
  if(arr1.length!==arr2.length)
  return false;
  let s={}
  for (const iterator of arr2) {
    s[iterator]=(s[iterator]||0)+1
  }
  for (let index = 0; index < arr1.length; index++) {
    const element=arr1[index]*arr1[index];
    if(!(s[element])){
      return false;
    }else{
      s[element]=s[element]- 1;
    }
    
  }
  return true;
}

console.log(same([1,2,3,3],[9,1,4,9])); 