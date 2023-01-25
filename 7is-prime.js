function isPrime(num) {
  for (let i = 2, rootNum = Math.sqrt(num); i <= Math.floor(rootNum); i++) if(num % i == 0 || num == 0) return false
  return num > 1
}