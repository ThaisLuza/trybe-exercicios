let n = 5;
let asterisco = '';
let espaco = ' ';
// for(let index = 1; index <= n; index++){
//  asterisco = asterisco + '*'
// }for (let x = 1; x <= n ; x++){
//   console.log(asterisco)
// }

// for(let index = 1; index <= n; index++){
//   asterisco = asterisco + '*'
//   console.log(asterisco)
// }

for(let index = 1; index <= n; index++)
{let s = ''
  for(let y=0; y < n-index; y++){
    s=s + ' '
  }for (let x=0;x<index;x++){
    s = s  + '*'
  }


  
  console.log(s)
 }