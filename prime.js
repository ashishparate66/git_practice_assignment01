function CheckPrime(number){
  let count=0;
  for(let i=1;i<=number;i++){
    if(number%i==0){
         count++;
    }
  }
  if(count==2){
   return true;
     }
  return false;
}
let ans=CheckPrime(13); 
if(ans == true){
  console.log("Its a prime number");
}
else{
  console.log("Not a prime number");
}

