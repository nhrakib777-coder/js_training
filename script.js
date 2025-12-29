/*
// Basic JavaScript Variables and Data Types
// string practice:
const username = 'rakib';
console.log(username);
const age = 25;
console.log(age);
const address = 'dhaka';
console.log(address);
const phone = '017769868';
console.log(phone);

// true or false
const moneyMoved = true;
console.log(moneyMoved);
const isSingle = false;
console.log(isSingle);
const isAbdullahMarried = true;
console.log(isAbdullahMarried);

// number practice:
const buyingPrice = 250;
const sellingPrice = 300;
const totalPrice = buyingPrice + sellingPrice;

console.log(totalPrice);
const difference = sellingPrice - buyingPrice;
console.log(difference);
console.log(buyingPrice * sellingPrice);
console.log(sellingPrice / buyingPrice);
console.log(sellingPrice % buyingPrice);
console.log(10 / 3);
console.log(10 % 3);

const firstName = 'rakib';
const lastName = 'hasan';
console.log(firstName + ' ' + lastName);

const fullName = firstName + ' ' + lastName;
console.log(fullName);

//Practice
//1
const income = 100;
const cost = 40;
const profit = income - cost;
console.log(profit);
//2
const ihavePancil = 10;
const usingPancil = 2;
const howManytimesIcanUsePancil = ihavePancil / usingPancil;
console.log(howManytimesIcanUsePancil);
//3
const iHaveMoney = 60;
const eachtimecost = 15;
const howManyTimeIcanCost = iHaveMoney / eachtimecost;
const reminder = iHaveMoney % eachtimecost;
console.log(howManyTimeIcanCost);
console.log(reminder);
//4
const hello = 'hello';
const world = 'world';
const helloworld = hello + world;
console.log(helloworld);
//5
const buyRice = 153;
const buyRentil = 261;
const totalBuy = buyRice + buyRentil;
console.log(totalBuy);
//6
const amrAcheMoney = 500;
const protibarKhoroch = 75;
const koybarKhorochKorteParbo = amrAcheMoney / protibarKhoroch;
console.log(koybarKhorochKorteParbo);
const kotoTakaBaki = amrAcheMoney % protibarKhoroch;
console.log(kotoTakaBaki);
//7
const firstNumber = 8;
const secondNumber = 3;
const sum = firstNumber / secondNumber;
console.log(sum);
//8
const fstnum = 50;
const scdnum = 9;
const result = fstnum % scdnum;
console.log(result);
//9
const Bangla = 'Bangla';
const Desh = 'Desh';
const Bangladesh = Bangla + Desh;
console.log(Bangladesh);
//10
const iHaveRice = 480;
const everydayuse = 4;
const howManyDaysRiceWillLast = iHaveRice / everydayuse;
const howManyMonthsRiceWillLast = howManyDaysRiceWillLast / 30;
console.log(howManyDaysRiceWillLast);
console.log(howManyMonthsRiceWillLast);

//js Data Types
const passed = true;
console.log(typeof passed);
const price = 555;
console.log(typeof price);
const learning = true;
console.log(typeof learning);
const megaCity = 'Dhaka';
console.log(typeof megaCity);
const temperature = 102.5;
console.log(typeof temperature);
const isHungry = true;
console.log(typeof isHungry);
const isRich = false;
console.log(typeof isRich);

//variable naming rules
let itemprice = 35;
itemprice = 40;
console.log(itemprice);

let balance = 500;
balance = 400;
console.log(balance);
//practice variable naming rules
let myAge = 25;
console.log(myAge);
myAge = 26;
console.log(myAge);
let pocketMoney = 500;
pocketMoney = 600;
console.log(pocketMoney);
let studyTime = 4;
console.log(studyTime);
studyTime = 5;
console.log('my study time incresed to:', studyTime);

//Naming variables properly
let city = 'Dhaka';
console.log(city);
let City = 'Chittagong';
console.log(City);

let 2ndposition = 'shakib';
console.log(2ndpostion);
//the problem is variable name cannot start with a number. it can be fixed like below:
let position2 = 'shakib';
console.log(position2);

//Nan example
const fatherAge = '50';
const sonAge = '25';
const totalAge = fatherAge + sonAge;
console.log(totalAge);

const fatherAgeNumber = parseInt(fatherAge);
const sonAgeNumber = parseInt(sonAge);
const totalAgeNumber = fatherAgeNumber + sonAgeNumber;
console.log(totalAgeNumber);

const price1 = 'x20';
const priceNumber = parseInt(price1);
console.log(priceNumber); //this will return NaN because "x" is not a number.

const age1 = parseInt('adfasf');
const weight = parseInt('twenty');
console.log(age1, weight);
//both will return NaN

const num1 = parseInt('12yrs');
const num2 = parseInt('423days');
const num3 = parseInt('asd345');
console.log(num1, num2, num3);
//num1 and num2 will return numbers but num3 will return NaN. because it start with string. and number after string is ignored in parseInt.

//float parse
const sugar = parseFloat('12.33');

console.log(sugar);
const salt = parseInt('32.55');
console.log(salt);

//toFixed example
const number1 = 23.354322;
const number2 = 32.4234121;

const totalNumber = number1 + number2;
console.log(totalNumber.toFixed(2));
console.log(totalNumber);
console.log(totalNumber.toFixed(1));
console.log(typeof totalNumber);
console.log(typeof totalNumber.toFixed(2));
console.log(parseFloat(totalNumber.toFixed(2)));
console.log(typeof parseFloat(totalNumber.toFixed(2)));
//toFixed returns string. so if we want to use it as number we have to parse it again.
//Practice parseInt, parseFloat and toFixed
const amrache = parseInt('20');
console.log(parseInt(amrache));

const premikBoy = '100.0';
console.log(parseFloat(premikBoy));
console.log(typeof parseInt(amrache));
console.log(typeof parseFloat(premikBoy));
const aroPabo = parseInt('10');
console.log(amrache + aroPabo);
const var1 = 1.232321;
console.log(var1.toFixed(1));
//parseFloat is used to parse decimal numbers
//parseInt is used to parse integer numbers
//toFixed is used to limit the number of decimal places
//toFixed returns string so if we want to use it as a number we have to parse it again

const priceA = '20.3';
console.log(parseInt(priceA));
console.log(parseFloat(priceA));

const kuttaDol = '56.69';
const kuttaLig = '12.34';
const totalKutta = parseFloat(kuttaDol) + parseFloat(kuttaLig);
console.log(totalKutta);
console.log(typeof totalKutta);

const awamiligVoter = '10.354235';
const bnpVoter = '5.234123';
const totalVoter = parseFloat(awamiligVoter) + parseFloat(bnpVoter);
console.log(totalVoter.toFixed(2));

//End of practice
*/
//JavaScript Comparisons
// > = greater than
// < = less than
// == = equal to
// >= = greater than or equal to
// <= = less than or equal to
// != = not equal to
/*
console.log(5 > 10);
console.log(5 < 10);
console.log(5 == 10);
console.log(10 == 10);
console.log(10 >= 10);
console.log(15 >= 10);
console.log(5 <= 10);
console.log(10 <= 10);
console.log(6 != 10);
//practice comparisons
const chotoBhaiKhaise = 5;
const boroBhaiKhaise = 7;

console.log(chotoBhaiKhaise > boroBhaiKhaise);
console.log(chotoBhaiKhaise < boroBhaiKhaise);
console.log(chotoBhaiKhaise == boroBhaiKhaise);
console.log(chotoBhaiKhaise != boroBhaiKhaise);
console.log(chotoBhaiKhaise >= boroBhaiKhaise);
console.log(chotoBhaiKhaise <= boroBhaiKhaise);

const inMyClass = 45;
const otherClass = 50;
console.log(inMyClass < otherClass);
console.log(inMyClass > otherClass);

const myNumber = 75;
const friendNumber = 75;
console.log(myNumber != friendNumber);
console.log(myNumber == friendNumber);

const iWantToDeposit = 100;
const nowIhave = 95;

console.log(iWantToDeposit <= nowIhave);
console.log(iWantToDeposit == nowIhave);

console.log(7 != 10);
console.log(20 <= 15);

//End of practice

const myName = 'rakib';
const friendName = 'Karim';

console.log(myName == friendName);

const myPromise = true;
const friendPromise = false;
console.log(myPromise == friendPromise);

const didStudy = true;
console.log(didStudy != false);
console.log(10 != 10);

// double equal vs triple equal
console.log(5 == '5'); //loose comparison, onle checks value
console.log(5 === '5'); //strict comparison, checks value and type
console.log(120 === 'tomato');
console.log(120 == 'tomato');

console.log(10 != '10');
console.log(10 !== '10');
console.log(10 != '12');
console.log(10 !== '12');

const test = 'test';
const TEST = 'TEST';
console.log(test == TEST);

const varA = 'hello';
const varB = 'Hello';
console.log(varA == varB);
console.log(varA === varB);

//End of double equal vs triple equal
//Javascript condition

if (3 < 10) {
  console.log('I am small. I do not bite.');
}
if (13 > 10) {
  console.log('I am big. I might bite.');
}
const biriyaniPrice = 500;
if (biriyaniPrice < 300) {
  console.log('Mama, give me a biriyani.');
}
const rainingOutside = true;
if (rainingOutside == true) {
  console.log('you and me under the tree.');
} else {
  console.log('no rain, noromance.');
}
const weight = 40;
if (weight > 20) {
  console.log('Rickshaw mama cholo jai');
} else {
  console.log('walking is exercising');
}
//practice javascript condition
const bashayAisi = true;
if (bashayAisi == true) {
  console.log('ammu nasta dise');
} else {
  console.log('ammu r mairo na.');
}

const login = true;
if (login == true) {
  console.log('welcome to your account');
} else {
  console.log('Get lost');
}

const run = 4;
if (run >= 5) {
  console.log('Mom gave me chocolate');
} else {
  console.log('No chocolate for you');
}

let myresult = 85;
if (myresult >= 80) {
  console.log('abbu bike dise');
} else {
  console.log('abbu bike deinai');
}

let movieShow = 11;
if (movieShow <= 9) {
  console.log('I will wathe the Movie');
} else {
  console.log('I will not watch the Movie');
}

let temperature = 39;
if (temperature > 30) {
  console.log('turn on the AC');
} else {
  console.log('use Blanket');
}
//End of practice

//Multiple conditions
const salary = 73000;
const isBCS = true;

if (salary > 50000 && isBCS == true) {
  console.log('sei level er patro');
} else {
  console.log('doore giya mor');
}

const salary2 = 25001;
const height = 68;

if (salary2 > 25000 || height > 72) {
  console.log('bolo baba kobul');
} else {
  console.log('tor kopale biya nai re');
}

//practice multiple conditions
//1
const hisAge = 19;
const hisheight = 62;

if (hisAge > 18 && hisheight > 60) {
  console.log('gari thelbe');
} else {
  console.log('gari te bosho');
}
//2
const math = 80;
const english = 82;
if (math > 80 || english > 85) {
  console.log('you can continue your study');
} else {
  console.log('tore biya dimu');
}
//3
const grade = 5;
const familyIncome = 10000;

if (grade == 5 && familyIncome < 10000) {
  console.log('you are eligible for scholarship');
} else {
  console.log('you are not eligible for scholarship');
}
//4

let jobSeekerAge = 32;
let experience = 1;

if (jobSeekerAge < 30 && experience >= 2) {
  console.log('you are eligible for the Interview');
} else {
  console.log('you are not eligible for the Interview');
}

//5
const haveChicken = true;
const haveEgg = 13;

if (haveChicken == true || haveEgg > 12) {
  console.log('I will cook');
} else {
  console.log('I will eat banana');
}

//6
let bodyTemp = 109;
let hasCough = false;

if (bodyTemp > 100 || hasCough == true) {
  console.log('you should see a doctor');
} else {
  console.log('take a rest at home');
}
//7
let attendance = 70;
let assignmentSubmited = true;

if (attendance >= 80 && assignmentSubmited == true) {
  console.log('you are eligible for the final exam');
} else {
  console.log('you are not eligible for the final exam');
}
//8
let electricity = false;
let phoneBattery = false;

if (electricity != true && phoneBattery != true) {
  console.log("I'll study");
} else {
  console.log("I can't study");
}
//9
let shirtPrice = 1100;
let couponAvailable = true;

if (shirtPrice > 1000 && couponAvailable != false) {
  console.log('I will get 20% discount');
} else {
  console.log('no discount for me');
}
//End of practice

//JavaScript else if

const price = 6500;

if (price >= 5000) {
  const discount = (price / 100) * 10;
  const pay = price - discount;
  console.log(pay);
} else {
  console.log(price);
}

const price2 = 2000;

if (price2 >= 5000) {
  const discount = (price2 / 100) * 10;
  const pay = price2 - discount;
  console.log(pay);
} else if (price2 >= 2500) {
  const discount = (price2 / 100) * 5;
  const pay = price2 - discount;
  console.log(pay);
} else {
  console.log(price2);
}*/
/*
//else if practice
//1
const price = 4500;

if (price >= 6000) {
  const discount = (price / 100) * 15;
  const pay = price - discount;
  console.log(pay);
} else if (price >= 3000) {
  const discount = (price / 100) * 5;
  const pay = price - discount;
  console.log(pay);
} else {
  console.log(price);
}
//2
const age = 41;
const price2 = 100;
if (age <= 12) {
  const discount = (price2 / 100) * 100;
  const pay = price2 - discount;
  console.log('you got 100% discount and your price is' + ' ' + pay);
} else if (age >= 60) {
  const discount = (price2 / 100) * 50;
  const pay = price2 - discount;
  console.log('you got 50% discount and your price is' + ' ' + pay);
} else {
  console.log(price2);
}
//3
const balance = 32004;
if (balance >= 5000) {
  console.log('you are rich.');
} else if (balance >= 1000) {
  console.log('Enjoy your life.');
} else {
  console.log('please deposite.');
}
//4
const result = 99;
if (result <= 100) {
  if (result >= 80) {
    console.log('A+');
  } else if (result >= 50) {
    console.log('pass.');
  } else {
    console.log('fail.');
  }
} else {
  console.log('invalid result.');
}
//End of Practice
//Nested if statement

const money = 200;
const popcornPrice = 60;
if (money >= 300) {
  console.log('going to watch a movie');

  if (popcornPrice <= 50) {
    console.log('buying a popcorn');
  } else {
    console.log('popcorn is expensive');
  }
} else {
  console.log('home alone');
}
//practice
//1
const haveMoney = 100;
const isInvited = false;
if (isInvited == true) {
  console.log("I'll go to the party.");
  if (haveMoney >= 1000) {
    console.log("I'll buy a gift.");
  } else {
    console.log("I'll not buy any gift");
  }
} else {
  console.log("I'll not go to the party.");
}
//2

const wantTea = true;
const wantBiscuit = true;
/*
if (wantTea) {
  if (wantBiscuit) {
    console.log('your tea and your biscuit.');
  } else {
    console.log('you tea, but not biscuit.');
  }
} else {
  console.log('enjoy movie');
}
  */

/*
// same logic with operators and else if
if (wantTea && wantBiscuit) {
  console.log('your tea and biscuit.');
} else if (wantTea) {
  console.log('your tea.');
} else {
  console.log('enjoy movie');
}
//3
const userAcc = 'Active';
const subscription = 'Premium';

if (userAcc === 'Active') {
  if (subscription === 'Premium') {
    console.log('your premium features.');
  } else {
    console.log('you are using free version');
  }
} else {
  console.log('your account is not active');
}
// with && operators, boolean and else if

const useraccount = false;
const subscribe = false;

if (useraccount && subscribe) {
  console.log('enjoy premium.');
} else if (useraccount) {
  console.log('your free version');
} else {
  console.log('not active.');
}
//4
const haveFood = false;
const isAppWorking = true;

if (haveFood === true) {
  console.log('make it hot');
} else if (isAppWorking === true) {
  console.log('Order food.');
} else {
  console.log('I am fasting.');
}

//with nested if condition
if (haveFood) {
  console.log('hot food');
} else {
  if (isAppWorking) {
    console.log('coming food');
  } else {
    console.log('fasting');
  }
}
//5
const invitedGuest = 10;
const bringGift = true;
if (invitedGuest >= 100) {
  if (bringGift) {
    console.log("let's Party all night.");
  } else {
    console.log('I will party with myself.');
  }
} else {
  console.log('NO party.');
}
//with && oparetors and else if

if (invitedGuest >= 100 && bringGift) {
  console.log('lets party all night');
} else {
  console.log('I will party with myself');
}
//weather app

const isRaining = false;
const hasUmbrella = false;

if (isRaining && hasUmbrella) {
  console.log('I can go for a walk');
} else if (isRaining && !hasUmbrella) {
  console.log('I will stay home.');
} else {
  console.log('It is a beautiful Day.');
}
//End of practicimg
//Logical not (!) physically hot

const isLeader = true;
if (isLeader === true) {
  console.log('gvnt money is mine.');
}
// shortcut
if (isLeader) {
  console.log('gvmnt er taka amr');
}

const isPassed = true;
if (isPassed == false) {
  console.log('ajk mair khabo.');
}
if (!isPassed) {
  console.log('ami mair khamu');
}

//ternary operator

let productPrice = 500;
let isBoroVai = true;
if (isBoroVai) {
  console.log((productPrice = 0));
} else {
  console.log((productPrice = productPrice + 100));
}

productPrice = isLeader ? console.log(0) : console.log(productPrice + 100);
//JavaScript LOgical Not Operator Practice:
//1
const cashBack = 3000;

cashBack >= 3000 ? console.log(cashBack - 500) : console.log(cashBack - 0);
//another way
const finalAmount = cashBack >= 3000 ? cashBack - 500 : cashBack;
console.log(finalAmount);
//2
const myAge = 12;
myAge >= 15 ? console.log('teenager') : console.log('child');
//3
const isLoggedIn = false;
const message = isLoggedIn ? 'welcome back' : 'please login';
console.log(message);
//4
const isTank = true;
const warning = isTank ? 'Ready for a long drive' : 'fill the tank';
console.log(warning);
// with logical not(!)
const isTank1 = true;
const warning1 = !isTank ? 'lets drive' : 'empty';
console.log(warning1);
//6
const sunny = false;
const decision = !sunny ? 'stay home' : 'go out side';
console.log(decision);
//7
const expensive = false;
const decision1 = !expensive ? 'I will buy' : 'I do not buy';
console.log(decision1);
//javascript condition End
*/
//JavaScript Array
//practice Array
//1
/*
const numbers = [71, 72, 73, 74, 74, 75, 76, 77, 78, 79];
console.log(numbers);
//2
const fruits = ['mango', 'apple', 'banana', 'orange', 'guava'];
console.log(fruits);
//3
const vegetables = [
  'potato',
  'onion',
  'eggplant',
  'tomato',
  'carrots',
  'ladies finger',
  'lau',
  'cucumbers',
  'potol',
  'kumra',
];

const total = vegetables.length;
console.log(total);
//4
const colors = [
  'black',
  'red',
  'white',
  'purple',
  'blue',
  'brown',
  'pink',
  'golden',
];
const totalColor = colors.length;
console.log(totalColor);
//index
const number1 = [3, 5, 77, 32, 34];
number1[4] = 100;
console.log(number1[0]);
console.log(number1[3]);
const fourth = number1[4];
console.log(fourth);
console.log(number1[5]);
console.log(number1);

// practice index
//1
const freinds = ['abdullah', 'sajid', 'qayoom', 'hamza', 'ali', 'billah'];
console.log(freinds[3]);
//2
const books = [
  'bangla',
  'math',
  'english',
  'chemistry',
  'physics',
  'biology',
  'h.math',
];
console.log(books[5]);
//3
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num[7] = 30;
console.log(num);
//4
const games = ['free fire', 'pubg', 'candy crash', 'tample run', 'coc'];
games[2] = 'subway suffer';
console.log(games);
//5
const family = ['ammu', 'abbu', 'happy', 'hafija', 'opi', 'rakib'];
console.log(family[3]);

// array push pop
const num2 = [12, 34, 23, 56, 53];
console.log(num2);
num2.push(66);
console.log(num2);
num2.push(98, 354, 43, 2334);
console.log(num2);
const frndsName = ['fahim', 'tanvir', 'korim'];
console.log(frndsName);
frndsName.push('rohim', 'billal');
console.log(frndsName);
//pop
const frndsPop = ['rohim', 'rakib', 'mehedi', 'hasan'];
console.log(frndsPop);
frndsPop.pop();
const pop1 = frndsPop.pop();

console.log(pop1);
console.log(frndsPop);
//shift unshift
const classMate = ['rohim', 'korim', 'balam'];
console.log(classMate);
classMate.shift();
console.log(classMate);
classMate.unshift('head sir');
console.log(classMate);
//practice push pop shift unshift
//1
const numPrac = [10, 20, 30, 40, 50];
numPrac.push(60);
console.log(numPrac);
//2
const frndList = ['sojib', 'sagor', 'sakib', 'sohel'];
frndList.push('sumon');
console.log(frndList);
//3
const gameList = ['coc', 'free fire', 'pubg', 'cricket'];
gameList.pop();
console.log(gameList);
//4
const numList = [24, 36, 48, 60];
numList.unshift(12);
console.log(numList);
//5
const bookList = ['bangla', 'english', 'math'];
bookList.shift();
console.log(bookList);
//push pop shift unshift practice end
//array: include
const friends = ['selam', 'gelam', 'balam'];
const exist = friends.includes('gelam');
console.log(exist);

if (friends.includes('balam')) {
  console.log('party');
} else {
  console.log('no party');
}
//indexof
const index = friends.indexOf('jelam');
console.log(index);
//practicing of includes and indexOf
//1
/*
  the differents between includes and indexOf is 'When you need to just yes/no answer you should use includes' & 'When you need to know the position of an item you should use indexOf' from array.
*/
//2
/*
const fruitList = ['apple', 'mango', 'banana', 'lichi'];
if (fruitList.includes('mango')) {
  console.log('I have Mango.');
} else {
  console.log('I do not have Mango');
}

//3
const nameList = ['abul', 'kabul', 'tabul', 'bobul', 'babul'];
const indexNo = nameList.indexOf('babul');
console.log(indexNo);
//5
const city = ['dhaka', 'ctg', 'sylhet'];
city.push('rajshahi');
const search = city.includes('RajShahi');
console.log(search);
//6
const weather = ['sunny', 'rain', 'snow', 'forcast'];
if (weather.includes('rain')) {
  console.log('I need umbrella');
} else {
  console.log('no rain no pain');
}*/
// End of Array
//JavaScript Loop
