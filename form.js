'use Strict';
const mail = document.getElementById('Email');
const password = document.getElementById('password');
const warnMessage = document.querySelector('.message');
const checkBox = document.getElementById('checkbox');
const pswMessage = document.querySelector('.pswMessage');
const submitBtn = document.querySelector('.submit');

let endOfGmail = '@gmail.com';

// Email checks
mail.onfocus = function () {
  mail.style.borderBlockColor = 'black';
};
mail.onblur = function () {
  mail.style.borderBlockColor = '';
  warnMessage.style.display = '';
};

mail.onkeyup = function () {
  if (mail.value.match(endOfGmail)) {
    warnMessage.style.display = 'none';
  } else {
    warnMessage.style.display = 'flex';
  }
};

//Password checks

password.onfocus = function () {
  password.style.borderBlockColor = 'black';
};
password.onblur = function () {
  password.style.borderBlockColor = '';
};
password.onkeyup = function () {
  if (password.value.length < 8) {
    pswMessage.style.display = 'block';
  } else {
    pswMessage.style.display = 'none';
  }
};

/// Checkbox checks

checkBox.addEventListener('click', function () {
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
});

// Submit Button

submitBtn.addEventListener('click', function () {
  if (password.value.length >= 8 && mail.value.match(endOfGmail)) {
    alert('Login Successful ✅❤');
  } else {
    alert('Invalid Credentials');
  }
});
