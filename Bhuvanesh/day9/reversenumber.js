function reverseNumber(number)
{
	number= number+"";
	return number.split("").reverse().join();
}
console.log(reverseNumber(32243));
