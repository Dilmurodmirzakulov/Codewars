function findEvenIndex(arr)
{
  for(let i = 0; i < arr.length; i++){
    let leftSide = arr.slice(0, i), rightSide = arr.slice(i+1)
    let leftSum = 0, rightSum = 0
    for(const y of leftSide) leftSum += y
    for(const y of rightSide) rightSum += y
    if(leftSum === rightSum) {
      return i
      break
    }
  }
  return -1
}