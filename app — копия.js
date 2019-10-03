//1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

/*let string = 'i am in the easycode';
 
let arr = string.split(' ');

let newStr = '';

for (let i = 0; i < arr.length; i++){
	let word = arr[i];
	newStr += word[0].toUpperCase() + word.slice(1) + ' ';
}
console.log(newStr) */



//6. Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

/*let list = {
	name: 'denis',
	work: 'easycode',
	age: 29,
	sex: 'male',
	city: 'kharkiv',
	ftp: 433
};

for (let key in list){
	if (typeof(list[key]) == 'string'){
		let element = list[key].toUpperCase();
		list[key] = element;
	}
}
console.log(list);*/
//5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.


/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let element of arr) {
	if(element % 2 !== 0 ){
		console.log(element);
	}
}*/
//4. На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

/*let text = 'JavaScript is a pretty good language';

let arr = text.split(' ');
let newStr = '';

for (let i = 0; i < arr.length; i++){
	let word = arr[i];
	newStr += word[0].toUpperCase() + word.slice(1);
}

console.log(newStr)*/



//2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
/*let string = 'tseb eht ma i';

let arr = string.split('');
let res = '';

for (let i = arr.length - 1; i >= 0; --i){
	res += arr[i];
}
console.log(res)*/



//3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

/*let factorial = 1;

for (let i = 1; i <= 10; i++){

	factorial *=  i;


}
console.log(factorial)*/