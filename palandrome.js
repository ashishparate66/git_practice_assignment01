let bag="";
function CheckPalindrome(string){
  for(let i=string.length-1;i>=0;i--){
    bag=bag+string[i];
  }
  if(string===bag){
    return true;
  }
  return false;
}

let ans=CheckPalindrome("naman")
if(ans==true){
  console.log("Its a palindrome");
}
else{
  console.log("not a palindrome");
}
