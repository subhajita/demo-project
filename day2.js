function fibonacci(num)
{
	var a=0,b=1;
	console.log(a);
	console.log(b);
	var counter,c;
	for(counter=2;counter<num;counter++)
	{
		c=a+b;
		console.log(c);
		a=b;
		b=c;
	}
}
fibonacci(10);