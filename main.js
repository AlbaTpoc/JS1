/*let age = Number(prompt(`Сколько вам лет?`));

let up = 17;

let result = age + up;

alert(result)

let a = 10;

alert(a)

let b = 20;

alert(b)

let yearPhone = ('Впервые аппарат был представлен 9 января 2007 г.');
alert(yearPhone)

let nameJs = ('JavaScript был создан за 10 дней автором Бренданом Айком')
alert(nameJs)

let math = ('Cуммa, разность, произведение и частное чисел 10 и 2');
alert(math)
let x = Number(10);
let y = Number(2);

alert(x + y)
alert(x * y)
alert(x - y)
alert(x / y)

let result = Number(2 ** 5);
alert(result)

let x = 1;
x += 5;
x -= 3;
x *= 7;
x /= 3;
x ++ 1;
x -+ 1;
alert(x);

let age = Number(prompt(`Сколько вам лет?`));

alert(age)

let a = 9;
let b = 2;
let result = Number(a % b);
alert(result)

const user = {
	name: 'Anton',
	isAdmin: true,
	age: 22,
	['city of residence']: 'Madrid',
};
user.age = 25;
delete user['city of residence'];
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info])

let userName = prompt('Как вас зовут?');
alert('Привет,' + userName);


let password = 'пароль';

let pass = prompt('Введите пароль');

(pass === 'пароль') ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

let c = (2);

c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

let d = (3);

let e = (12);

(d || e) > 100 ? console.log('Верно') : console.log('Неверно');

let a = 2;
let b = 3;
alert(a + b);

let monthNumber = prompt('Введите номер месяц в году')

switch (monthNumber) {
	case '12':
		console.log('зима');
		break;
	case '1':
		console.log('зима');
		break;
	case '2':
		console.log('зима');
		break;
	case '3':
		console.log('весна');
		break;
	case '4':
		console.log('весна');
		break;
	case '5':
		console.log('весна');
		break;
	case '6':
		console.log('лето');
		break;
	case '7':
		console.log('лето');
		break;
	case '8':
		console.log('лето');
		break;
	case '9':
		console.log('осень');
		break;
	case '10':
		console.log('осень');
		break;
	case '11':
		console.log('осень');
		break;
	default:
		case monthNumber > 13:
			console.log('Такого месяца не существует');
		break;
}




if (number % 2 == 0) {
	alert('Число четное');
} else {
	alert('Число нечетное');
}

let number = prompt('Пожалуйста, введите любое число');

number % 2 == 0 ? alert('Число четное') : alert('Число нечетное');
*/

// let detect = new MobileDetect(window.navigator.userAgent);

// console.log("Mobile: " + detect.mobile());
// console.log("Phone: " + detect.phone());
// console.log("Tablet: " + detect.tablet());
// console.log("OS: " + detect.os());
// console.log("userAgent: " + detect.userAgent());
// alert("Mobile: " + detect.mobile());
// alert("Phone: " + detect.phone());
// alert("Tablet: " + detect.tablet());
// alert("OS: " + detect.os());
// alert("userAgent: " + detect.userAgent());

// return this._cache.os;
// if (t.os('iOS')) {
// 	alert('11111111111111')
// }
// if (t.version('Android')) {
// 	alert('123123')
// }

// let Hi = 0;
// while (Hi < 2) {
// 	console.log('Привет');
// 	Hi++;
// }

// let i = 0;

// while (i < 6) {
// 	console.log(i);
// 	i++;
// }

// let i = 7;

// while (i < 23) {
// 	console.log(i);
// 	i++;
// };

// let i = 0;
// do {
// 	console.log(i);
// 	i++;
// } while (i > 7 && i < 22);

// let obj = {
// 	'Коля': 200,
// 	'Вася': 300,
// 	'Петя': 400,
// };

// for (let key in obj) {
// 	alert(`${key} — зарплата ${obj[key]} dollars`)
// }

// let n = 1000;
// let num = 0;

// while (n > 50) {
// 	num++;
// 	n = n / 2;
// }

// console.log(n);
// console.log('Iterated ' + num + ' times!')

for (let dayNumber = 1; dayNumber <= 31; dayhNumber += 7) {
	if (dayNumber == 5) {
		console.log('Сегодня пятница, ...-е число. Необходимо подготовить отчет.');
	} else if (dayNumber !== 5 && dayNumber <= 5 && dayNumber >= 31) {
		console.log('Весна');
	}
}