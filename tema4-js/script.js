let scoreInput = document.getElementById('scoreInput');
let scoreButton = document.getElementById('scoreButton');
let scoreText = document.getElementById('scoreText');

let emailInput = document.getElementById('emailInput');
let emailBtn = document.getElementById('emailBtn');
let emailTxt = document.getElementById('emailText');

let nameOfTheUser = prompt('Enter your name here.');

// Exercitiul 1) sa se creeze o functie care primeste ca parametru score-ul unui student la un test (interval 0 - 100).

// functia trebuie sa returneze grade-ul in sistem amerikanesk, adica:

// "F" daca score < 50.

// "D" daca 50 <= score < 65.

// "C" daca 65 <= score < 80.

// "B" daca 80 <= score < 90.

// "A" daca score >= 90.
scoreButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (parseInt(scoreInput.value) < parseInt(scoreInput.min)) {
    scoreInput.value = scoreInput.min;
  }
  if (parseInt(scoreInput.value) > parseInt(scoreInput.max)) {
    scoreInput.value = scoreInput.max;
  }

  scoreText.textContent = `The student grade is: ${studentTestResult(
    scoreInput.value
  )}`;
});

const studentTestResult = (score) => {
  let amerikanescGrade = '';

  switch (true) {
    case score < 50:
      amerikanescGrade = 'F';
      break;
    case score >= 50 && score < 65:
      amerikanescGrade = 'D';
      break;
    case score >= 65 && score < 80:
      amerikanescGrade = 'C';
      break;
    case score >= 80 && score < 90:
      amerikanescGrade = 'B';
      break;
    case score >= 90:
      amerikanescGrade = 'A';
      break;
  }

  return amerikanescGrade;
};

// Exercitiul 2) sa se creeze o functie care primeste ca parametru un username.

// functia trebuie sa returneze

// 1) "This field is required" daca username-ul nu a fost introdus

// 2) "Invalid username" daca username-ul are sub 5 caractere SAU daca include spatiu SAU caractere speciale

// 3) "Valid username" daca se trece de validarile de mai sus

const usernameCriterias = (username) => {
  const regex = /[^A-Za-z0-9]/;

  while (username === null || username === '') {
    alert('This field is required!');
    username = prompt('Enter your name here.');
  }

  if (username.length < 5 || username.includes(' ') || regex.test(username)) {
    alert('Invalid username');
  } else alert('Valid username');
};

usernameCriterias(nameOfTheUser);

// Exercitiul 3) sa se creeze o functie care primeste ca parametru un email.

// functia trebuie sa returneze

// 1) "This field is required" daca emailul nu a fost introdus

// 2) "Invalid username" daca emailul nu e valid. un mail valid:

// - are peste 6 caractere

// - contine @ si .

// - nu contine mai multi de a rond sau mai multe puncte

// - nu contine caractere speciale in afara de _ sau -

// - nu contine _ sau - inainte sau dupa @

// - nu contine _ sau - inainte sau dupa .

// - @ trebuie sa fie inainte de .

// - @ trebuie sa nu se afle pe prima pozitie in string

// - . trebuie sa nu se afle pe ultima pozitie in string

// - intre @ si . trebuie sa existe cel putin un caracter

// - dupa . trebuie sa aiba minim 2 caractere

// 3) "Valid email" daca se trece de validarile de mai sus

emailBtn.addEventListener('click', (event) => {
  event.preventDefault();
  checkEmail(emailInput.value);
});

const checkEmail = (email) => {
  const validChars = /^[a-zA-Z0-9_-]+$/;

  if (email === '') {
    emailTxt.textContent = 'This field is required';
    return;
  }

  if (email.length < 6) {
    emailTxt.textContent = 'Invalid email';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    emailTxt.textContent = 'Invalid email';
    return;
  }

  if (
    (email.match(/@/g) || []).length !== 1 ||
    (email.match(/\./g) || []).length !== 1
  ) {
    emailTxt.textContent = 'Invalid email';
    return;
  }

  const emailArova = email.indexOf('@');
  const beforeArova = email.substring(0, emailArova);
  const afterArova = email.substring(emailArova + 1);

  if (!validChars.test(beforeArova)) {
    emailTxt.textContent = 'Invalid email';
    return;
  }

  let afterArovaParts = afterArova.split('.');
  if (
    !(
      validChars.test(afterArovaParts[0]) || validChars.test(afterArovaParts[1])
    )
  ) {
    emailTxt.textContent = 'Invalid email';
    return;
  }

  if (email.indexOf('@') === 0) {
    emailTxt.textContent = 'Invalid email';
    return;
  }

  if (email.lastIndexOf('.') === email.length - 1) {
    emailTxt.textContent = 'Invalid email';
    return;
  }

  const arovaPos = email.indexOf('@');
  const dotPos = email.indexOf('.');
  if (dotPos <= arovaPos + 1) {
    emailTxt.textContent = 'Invalid email';
    return;
  }

  const lastDotPos = email.lastIndexOf('.');
  if (email.substring(lastDotPos + 1).length < 2) {
    emailTxt.textContent = 'Invalid email';
    return;
  }

  emailTxt.textContent = 'Valid email';
};

// Exercitiul 4) sa se creeze o functie care primeste ca parametru un cod de discount (string).

// un cod de discount este considerat valid daca:

// - are 8 caractere

// - contine minim 2 numere

// - contine minim o litera cu uppercase

// Daca un cod este invalid sa se returneze "Invalid code", altfel "Valid code".

const checkDiscount = (code) => {
  const numberChars = /[0-9]/g;
  const uppercaseChars = /[A-Z]/g;

  if (code.length !== 8) {
    console.log('Invalid code1');
    return;
  }

  if ((code.match(numberChars) || []).length < 2) {
    console.log('Invalid code2');
    return;
  }

  if (!code.match(uppercaseChars)) {
    console.log('Invalid code3');
    return;
  }

  console.log('Valid code');
};

checkDiscount('bBs2aa3a');

// Exercitiul 5) sa se creeze o functie care are un parametru reprezentand soldul unui cont bancar ( number ) al unei persoane,

// iar al doilea parametru reprezentand suma de bani pe care vrea sa o scoata din bancomat ( number ).

// functia sa returneze:

// - "Invalid amount" daca suma de bani nu e numar pozitiv intreg

// - "Please choose a multiple of ten" daca suma de bani nu e multiplu de 10

// - "Insufficient funds" daca suma de bani e mai mare decat soldul

// - "Success! You've withdrawed $X. Your new balance is $Y" daca e totul bn

let bankBtn = document.getElementById('bankBtn');
let bankText = document.getElementById('bankText');
let bankInput = document.getElementById('bankInput');

bankBtn.addEventListener('click', (event) => {
  event.preventDefault();
  checkBankAccount(200, Number(bankInput.value));
});

const checkBankAccount = (accountMoney, withdrawalMoney) => {
  if (!Number.isInteger(withdrawalMoney) || withdrawalMoney < 0) {
    bankText.textContent = 'Invalid amount';
    return;
  }

  if (!(withdrawalMoney % 10 === 0)) {
    bankText.textContent = 'Please choose a multiple of ten';
    return;
  }

  if (withdrawalMoney > accountMoney) {
    bankText.textContent = 'Insufficient funds';
    return;
  }

  bankText.textContent = `Success! you've withdrawed ${withdrawalMoney}$. Your new balance is ${
    accountMoney - withdrawalMoney
  }$`;
};

// Exercitiul 6) sa se creeze o functie care are 3 parametrii a, b si c. fiecare reprezinta lungimea laturii unui triunghi.

// daca exista vreo latura care sa aiba o lungime invalida ( numar non-pozitiv ) => sa se returneze "Invalid triangle"

// daca triunghiul este dreptunghic => "Right Triangle" ( hint: pitagora )

// daca cele 3 laturi sunt egale => "Equilateral"

// daca cele 2 laturi sunt egale => "Isosceles"

// daca cele nu exista laturi egale => "scalene"

const checkTriangle = (a, b, c) => {
  if (a < 0 || b < 0 || c < 0) {
    console.log('Invalid triangle');
    return;
  }

  if (
    a ** 2 + b ** 2 === c ** 2 ||
    c ** 2 + b ** 2 === a ** 2 ||
    a ** 2 + c ** 2 === b ** 2
  ) {
    console.log('Right triangle');
    return;
  }

  if (a === b && b === c) {
    console.log('Equilateral');
    return;
  }

  if (a === b || b === c || a === c) {
    console.log('Isosceles');
    return;
  }

  if (a !== b || a !== c || b !== c) {
    console.log('Scalene');
    return;
  }
};

checkTriangle(5, 4, 3);

// Exercitiul 7) Sa se creeze o functie care are scopul de a returna statusul unui birou - daca e deschis sau nu

// intr-o zi specifica, la o ora anume. Biroul este deschis in intervalul M-F, orele 9-18.

// Functia are 2 parametrii: day si hour.

// Day poate fi un string din lista urmatoare: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".

// Hour poate fi un numar din intervalul 0-23.

// Daca day nu e o valoare valida ( adica un string din list aia) => sa se returneze "Invalid day".

// Daca hour nu e o valoare valida => sa se returneze "Invalid hour".

// Daca biroul este deschis => sa se returneze "Office is open"

// Daca biroul este inchis => sa se returneze "Office is closed."

// Extra challenge: daca e inchis biroul, sa se returneze un string de genul: "Office is closed. It will open tomorrow at 9AM".

const checkOffice = (day, hour) => {
  let dayString = '';

  switch (day) {
    case 0:
      dayString = 'Monday';
      break;
    case 1:
      dayString = 'Tuesday';
      break;
    case 2:
      dayString = 'Wednesday';
      break;
    case 3:
      dayString = 'Thursday';
      break;
    case 4:
      dayString = 'Friday';
      break;
    case 5:
      dayString = 'Saturday';
      break;
    case 6:
      dayString = 'Sunday';
      break;
    default:
      dayString = 'Invalid day';
      console.log(dayString);
      return;
  }

  if (hour < 0 || hour > 23) {
    console.log('Invalid hour');
    return;
  }

  if (day > 4) {
    console.log('Office is closed');
    return;
  }

  if ((hour < 9 || hour > 18) && day < 4) {
    console.log('Office is closed, come back tomorrow at 9AM');
    return;
  }

  if ((hour < 9 || hour > 18) && day < 5) {
    console.log('Office is closed, come back Monday at 9AM');
    return;
  }

  console.log('Office is open');
};

checkOffice(1, 14);
