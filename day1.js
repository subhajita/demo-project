const numberToString=(num)=>
{
    const number=["zero","one","two","three","four","five","six","seven","eight","nine"];
    let string=" ";
    let numArr=num.toString.split("");
}
for(var i=0;i<numArr.length;i++)
{
    string +=number[parseInt(numArr[i])]+" ";
}
console.log(string);
numberToString(1234);
