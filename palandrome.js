let bag="";
function CheckPalindrome(str){
  for(let i=str.length-1;i>=0;i--){
    bag=bag+string[i];
  }
  if(string===bag){

    return true;
  }
  return false;
}

let answer=CheckPalindrome("naman")
if(answer==true){
  console.log("Its a palindrome");
}
else{
  console.log("not a palindrome");
}
