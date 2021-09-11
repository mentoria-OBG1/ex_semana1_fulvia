const arr1 = [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43];


    const pares = arr1.filter(num => num % 2 == 0);
	const impares = arr1.filter(num => num % 2 != 0);
	

	pares.sort((a, b) => a-b);
	impares.sort((a, b) => b-a);
	

	pares.forEach(i => console.log(i));
	impares.forEach(i => console.log(i));


    
const myArray = [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43];

myArray.sort((a, b) => a-b);

console.log(myArray)