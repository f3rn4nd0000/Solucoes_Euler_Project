function multiplesOf3and5(number) {

  let multiples = new Array();

  for (let i = 0; i < number; i++){
    if (i%3 == 0 || i%5 === 0) {
      multiples.push(i);
    }
  }
  console.log('length = '+multiples.length)
  let sum = 0;
  for (let i=0; i < multiples.length; i++){
    sum += multiples[i];
  }
  console.log('sum = '+sum);
  return sum;
}

multiplesOf3and5(1000);