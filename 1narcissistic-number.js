function narcissistic(value) {
  let strArr = value.toString().split('');
  let numArr = strArr.map(x => parseInt(x))
  let sum = 0;
  for(let i = 0; i < numArr.length; i++){
    sum += Math.pow(numArr[i], numArr.length)
  }
  return sum === value ? true : false;
}