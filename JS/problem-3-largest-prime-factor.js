function isPrime(number){

      if(number === 1 || number === 2)
         return true;
  
  for(let j = 2; j < number; j++){
        if(number%j === 0 && j!=number){
            return false;
        }
  }
        return true;
        } 

function largestPrimeFactor(number) {
  let largest ;

//  if(number%i == 0){}
  for(let i = 2; i <= number; i++){
      console.log(i+" "+isPrime(i)+" "+" "+number/i+" - "+number);
    if(number%i === 0 && isPrime(i)){
      largest = i;
      number = number/i;
    }
  }
  return largest;
}
// console.log(largestPrimeFactor(2));
// console.log(largestPrimeFactor(4));
 console.log("LargestPrimeFactor(8) = "+largestPrimeFactor(8));
 console.log("----------------");
 console.log("LargestPrimeFactor(16) = "+largestPrimeFactor(16));
// console.log(isPrime(7));
// console.log(isPrime(4));
//console.log(largestPrimeFactor(8));
//console.log(isPrime(13195));
// console.log(isPrime(600851475143));
// console.log(largestPrimeFactor(600851475143));
//largestPrimeFactor(13195);
