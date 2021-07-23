function sumZero(arr){
  for (i of arr) {
    for (j of arr){
      if(arr[i] + arr[j] === 0) {
        return true
      }
    }
  } 
}

