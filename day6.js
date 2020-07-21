function palindrome(str) 
{
    var isPalindrome=true;
    for(var i=0, j=str.length-1;i<=j;i++,j--)
    {
        if(str[i]!==str[j])
        {
            isPalindrome=false;
        }
    }
    return isPalindrome ? "Its a palindrome":"Its not a palindrome";
}
console.log(palindrome("kayak"));
console.log(palindrome("madam"));
console.log(palindrome("malayalam"));