//The "VIP" Club Entry" system
/*let age = Number(prompt('what is your age?'));
let hasTicket = 'Do you have ticket? (if you have then "ok" either cancel.)';
let isVIP = 'are you a VIP guest? (if you are then ok either cancel.';

if (age >= 18 && (hasTicket || isVIP)) {
  alert('Welcome 420 club.');
} else if (age < 18) {
  alert('you not eligible, you are child');
} else {
  alert('sorry you are not welcome.');
}

if (age >= 18 && hasTicket) {
  alert('ok you can go.');
  if (!hasTicket) {
    confirm(isVIP);
    if (isVIP) {
      alert('salam ostad');
    }
  }
} else {
  alert('you are child.');
}


if (age >= 18) {
  confirm(hasTicket);
  alert('ok welcome');
  if (hasTicket) {
  } else if (!hasTicket) {
    confirm(isVIP);
    if (isVIP) {
      alert('salam boss');
    } else {
      alert('not welcome');
    }
  } else {
    alert('please go back');
  }
} else {
  alert('you are child.');
}
*/
/*
let age = Number(prompt('Age koto?'));

if (age >= 18) {
  // Confirm er result variable e rakhte hobe
  let hasTicket = confirm('Ticket ache?');

  if (hasTicket) {
    alert('Ok, welcome!');
  } else {
    // Ticket na thakle VIP kina check korchi
    let isVIP = confirm('Ticket nei, apni ki VIP?');

    if (isVIP) {
      alert('Salam Boss! Welcome.');
    } else {
      alert('Not welcome, please go back.');
    }
  }
} else {
  alert('You are a child.');
}
*/
/*
//Hotel GATE PASS

let roomNum = Number(prompt('please enter you room number.'));

if (roomNum <= 100) {
  let hasBooked = confirm('did you you book the room?');
  if (hasBooked) {
    alert('welcome to grand hotel sir');
  } else {
    let isStaff = confirm('are you hotel staff');
    if (isStaff) {
      alert('welcome to your job.');
    } else {
      alert('you are not eligeble to enter');
    }
  }
} else {
  alert('invalid room number');
}
*/
//project 2 The Mini ATM

let balance = 10000;
let history = [];
let amountInput = prompt(
  'you available balance is: ' + balance + '. how much you want to withdraw?'
);
let withDrawAmount = Number(amountInput);

if (withDrawAmount > 0 && withDrawAmount <= balance) {
  balance = balance - withDrawAmount;

  let messege = 'withdrew $' + withDrawAmount;
  history.push(messege);

  alert('withdraw sucsessfull. your balance : ' + balance);
} else if (withDrawAmount > balance) {
  alert('you do not have enough money.');
} else {
  alert('please enter a valid number.');
}

console.log(history);
