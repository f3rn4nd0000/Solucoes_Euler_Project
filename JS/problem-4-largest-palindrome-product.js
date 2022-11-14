function isPalindrome(number){
// console.log(typeof(look));
      let look = String(number);
      let hear = false;

    // console.log("caralho "+look.length);

    for(let i = 0; i< look.length; i++){
      // console.log("porras "+look.length - 1);
    if(look[i] === look[(look.length)-(i+1)]){
        // console.log("sadas"+i);
        hear = true;
      }
      else 
        return false;
    }

  return hear;
}

function largestPalindromeProduct(n) {

  let product = 0;
  let largestPalindrome = 11;

// console.log(10**(n-1));
// console.log(10**n);

for(let i=10**(n-1) ;i < 10**n;i++){
  for(let j = 10**(n-1);j<10**n;j++){
       product = i*j;
      //  console.log(product);
      if(isPalindrome(product) && product>largestPalindrome)
       largestPalindrome = product; 
    }
}
  return largestPalindrome;
}

console.log(isPalindrome(9009));

// console.log(isPalindrome(94092));


 console.log(largestPalindromeProduct(2));

// console.log(largestPalindromeProduct(3));

/*function largestPalindromeProduct(n) {
  // let product = 0 ;
  let arr = [] ;
  // arr.length = 2*n - 1 ;
  let largestPalindrome = 0 ;
  for(let i = n**2 ; i < 10**(2*n) ; i++){
  console.log(10**(2*n));
       console.log(n**2);
      // console.log("largestPal "+largestPalindrome);
      if(isPalindrome(i)>largestPalindrome)
        largestPalindrome = i;
  }
  return largestPalindrome;
}*/

// console.log(isPalindrome(906609));
// console.log(isPalindrome(1134));
// console.log(largestPalindromeProduct(3));
//  largestPalindromeProduct(3);