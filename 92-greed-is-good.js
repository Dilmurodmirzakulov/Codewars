function score( dice ) {
  let mark = 0
  let one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
  dice.forEach(x =>{
    if(x === 1) one++
    if(x === 2) two++
    if(x === 3) three++
    if(x === 4) four++
    if(x === 5) five++
    if(x === 6) six++
  })
  if(one == 1) mark+=100
  if(one == 2) mark+=200
  if(one == 3) mark+=1000
  if(one == 4) mark+=1100
  if(one == 5) mark+=1200
  if(two >= 3) mark+=200
  if(three >= 3) mark+=300
  if(four >= 3) mark+=400
  if(five == 1) mark+=50
  if(five == 2) mark+=100
  if(five == 3) mark+=500
  if(five == 4) mark+=550
  if(five == 5) mark+=600
  if(six >= 3) mark+=600
  return mark 
}