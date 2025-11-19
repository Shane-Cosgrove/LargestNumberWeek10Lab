/*preset array of numbers, can expand if needs be*/

var numbers = [12, 45, 7, 89, 23, 56, 101, 33];

function findLargest() {
	//assuming the largest number is the first
	let largest = numbers[0];
	
	//use loop to gain access to the array and identify largest number
	for (let i=0; i < numbers.length; i++) {
		if (numbers[i] > largest) {
			largest = numbers[i];
		}
	}
	
	//display result on page
	document.getElementById("result").innerHTML="The largest number is: " + largest;
}