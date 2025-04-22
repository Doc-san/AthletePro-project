// ------------------ VALIDATION ל- LOGIN ------------------
function validateLoginUsername() {
  const username = document.getElementById('username');
  const msg = document.getElementById('usernameMsg');
  const regex = /^[א-תa-zA-Z0-9]{3,}$/;

  if (regex.test(username.value.trim())) {
    username.classList.add('valid');
    username.classList.remove('invalid');
    msg.textContent = "שם משתמש תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    username.classList.add('invalid');
    username.classList.remove('valid');
    msg.textContent = "לפחות 3 תווים – אותיות ומספרים בלבד";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

function validateLoginPassword() {
  const password = document.getElementById('password');
  const msg = document.getElementById('passwordMsg');

  if (password.value.trim().length >= 6) {
    password.classList.add('valid');
    password.classList.remove('invalid');
    msg.textContent = "סיסמה תקינה";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    password.classList.add('invalid');
    password.classList.remove('valid');
    msg.textContent = "לפחות 6 תווים";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  document.getElementById('username').addEventListener('input', validateLoginUsername);
  document.getElementById('password').addEventListener('input', validateLoginPassword);

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const isUsernameValid = validateLoginUsername();
    const isPasswordValid = validateLoginPassword();
    if (isUsernameValid && isPasswordValid) {
      window.location.href = "dashboard.html";
    } else {
      alert("אנא תקן את השגיאות בטופס לפני שליחה");
    }
  });
}

// ------------------ VALIDATION ל- REGISTER ------------------
function validateRegUsername() {
  const username = document.getElementById('reg-username');
  const msg = document.getElementById('regUsernameMsg');
  const regex = /^[א-תa-zA-Z0-9]{3,}$/;

  if (regex.test(username.value.trim())) {
    username.classList.add('valid');
    username.classList.remove('invalid');
    msg.textContent = "שם משתמש תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    username.classList.add('invalid');
    username.classList.remove('valid');
    msg.textContent = "לפחות 3 תווים – אותיות ומספרים בלבד";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

function validateRegEmail() {
  const email = document.getElementById('reg-email');
  const msg = document.getElementById('regEmailMsg');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email.value.trim())) {
    email.classList.add('valid');
    email.classList.remove('invalid');
    msg.textContent = "כתובת אימייל תקינה";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    email.classList.add('invalid');
    email.classList.remove('valid');
    msg.textContent = "כתובת אימייל לא תקינה";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

function validateRegPassword() {
  const password = document.getElementById('reg-password');
  const msg = document.getElementById('regPasswordMsg');

  if (password.value.trim().length >= 6) {
    password.classList.add('valid');
    password.classList.remove('invalid');
    msg.textContent = "סיסמה תקינה";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    password.classList.add('invalid');
    password.classList.remove('valid');
    msg.textContent = "הסיסמה חייבת להכיל לפחות 6 תווים";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

function validateRegPasswordConfirm() {
  const password = document.getElementById('reg-password');
  const confirm = document.getElementById('reg-password-confirm');
  const msg = document.getElementById('regPasswordConfirmMsg');

  if (confirm.value.trim() === password.value.trim() && confirm.value.trim() !== "") {
    confirm.classList.add('valid');
    confirm.classList.remove('invalid');
    msg.textContent = "הסיסמאות תואמות";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    confirm.classList.add('invalid');
    confirm.classList.remove('valid');
    msg.textContent = "הסיסמאות אינן תואמות";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  document.getElementById('reg-username').addEventListener('input', validateRegUsername);
  document.getElementById('reg-email').addEventListener('input', validateRegEmail);
  document.getElementById('reg-password').addEventListener('input', () => {
    validateRegPassword();
    validateRegPasswordConfirm();
  });
  document.getElementById('reg-password-confirm').addEventListener('input', validateRegPasswordConfirm);

  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const validUsername = validateRegUsername();
    const validEmail = validateRegEmail();
    const validPassword = validateRegPassword();
    const validConfirm = validateRegPasswordConfirm();

    if (validUsername && validEmail && validPassword && validConfirm) {
      alert("ההרשמה בוצעה בהצלחה!");
    } else {
      alert("אנא תקן את השדות המסומנים באדום");
    }
  });
}

// ------------------ PROFILE FORM VALIDATION ------------------
function validateFirstName() {
  const firstName = document.getElementById('first-name');
  const msg = document.getElementById('firstNameMsg');
  const regex = /^[א-תa-zA-Z\s]{2,}$/;

  if (regex.test(firstName.value.trim())) {
    firstName.classList.add('valid');
    firstName.classList.remove('invalid');
    msg.textContent = "שם פרטי תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    firstName.classList.add('invalid');
    firstName.classList.remove('valid');
    msg.textContent = "שם פרטי חייב להכיל לפחות 2 אותיות בלבד";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

function validateLastName() {
  const lastName = document.getElementById('last-name');
  const msg = document.getElementById('lastNameMsg');
  const regex = /^[א-תa-zA-Z\s]{2,}$/;

  if (regex.test(lastName.value.trim())) {
    lastName.classList.add('valid');
    lastName.classList.remove('invalid');
    msg.textContent = "שם משפחה תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    lastName.classList.add('invalid');
    lastName.classList.remove('valid');
    msg.textContent = "שם משפחה חייב להכיל לפחות 2 אותיות בלבד";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

function validateGender() {
  const gender = document.getElementById('gender');
  const msg = document.getElementById('genderMsg');
  const regex = /^[א-תa-zA-Z\s]+$/;

  if (regex.test(gender.value.trim())) {
    gender.classList.add('valid');
    gender.classList.remove('invalid');
    msg.textContent = "מגדר תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    gender.classList.add('invalid');
    gender.classList.remove('valid');
    msg.textContent = "יש להזין טקסט בלבד";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

function validateHeight() {
  const height = document.getElementById('height');
  const msg = document.getElementById('heightMsg');
  const value = parseInt(height.value, 10);

  if (!isNaN(value) && value >= 100 && value <= 250) {
    height.classList.add('valid');
    height.classList.remove('invalid');
    msg.textContent = "גובה תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    height.classList.add('invalid');
    height.classList.remove('valid');
    msg.textContent = "גובה צריך להיות בין 100 ל-250 ס\"מ";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

function validateWeight() {
  const weight = document.getElementById('weight');
  const msg = document.getElementById('weightMsg');
  const value = parseInt(weight.value, 10);

  if (!isNaN(value) && value >= 30 && value <= 250) {
    weight.classList.add('valid');
    weight.classList.remove('invalid');
    msg.textContent = "משקל תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    weight.classList.add('invalid');
    weight.classList.remove('valid');
    msg.textContent = "משקל צריך להיות בין 30 ל-250 ק\"ג";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

// --- ולידציה למספר כרטיס ---
function validateCreditCard() {
  const card = document.getElementById('credit-card');
  const msg = document.getElementById('cardMsg');
  const value = card.value.trim();

  if (!value) {
    card.classList.add('invalid');
    card.classList.remove('valid');
    msg.textContent = "יש להזין מספר כרטיס אשראי";
    msg.classList.add('invalid');
    return false;
  }
  if (/^\d{16}$/.test(value)) {
    card.classList.add('valid');
    card.classList.remove('invalid');
    msg.textContent = "מספר כרטיס תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    card.classList.add('invalid');
    card.classList.remove('valid');
    msg.textContent = "מספר כרטיס חייב להיות בן 16 ספרות";
    msg.classList.add('invalid');
    msg.classList.remove('valid');
    return false;
  }
}

// --- ולידציה לתוקף (MM/YYYY) ---
function validateExpiry() {
  const m = document.getElementById('expiry-month');
  const y = document.getElementById('expiry-year');
  const msg = document.getElementById('expiryMsg');
  const month = parseInt(m.value, 10);
  const year = parseInt(y.value, 10);

  if (!m.value || !y.value) {
    m.classList.remove('valid','invalid');
    y.classList.remove('valid','invalid');
    msg.textContent = "יש לבחור חודש ושנה";
    msg.classList.add('invalid');
    return false;
  }

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  if (year > currentYear || (year === currentYear && month >= currentMonth)) {
    m.classList.add('valid'); m.classList.remove('invalid');
    y.classList.add('valid'); y.classList.remove('invalid');
    msg.textContent = "תוקף תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    m.classList.add('invalid'); m.classList.remove('valid');
    y.classList.add('invalid'); y.classList.remove('valid');
    msg.textContent = "התאריך חלף, בחר/י תאריך תקף";
    msg.classList.add('invalid');
    return false;
  }
}

// --- ולידציה ל־CVV ---
function validateCVV() {
  const cvv = document.getElementById('cvv');
  const msg = document.getElementById('cvvMsg');
  const value = cvv.value.trim();

  if (!value) {
    cvv.classList.add('invalid');
    msg.textContent = "יש להזין CVV";
    msg.classList.add('invalid');
    return false;
  }
  if (/^\d{3,4}$/.test(value)) {
    cvv.classList.add('valid');
    msg.textContent = "CVV תקין";
    msg.classList.add('valid');
    msg.classList.remove('invalid');
    return true;
  } else {
    cvv.classList.add('invalid');
    msg.textContent = "CVV חייב להיות 3 או 4 ספרות";
    msg.classList.add('invalid');
    return false;
  }
}

const profileForm = document.getElementById('profile-form');
if (profileForm) {
  document.getElementById('first-name').addEventListener('input', validateFirstName);
  document.getElementById('last-name').addEventListener('input', validateLastName);
  document.getElementById('gender').addEventListener('input', validateGender);
  document.getElementById('height').addEventListener('input', validateHeight);
  document.getElementById('weight').addEventListener('input', validateWeight);
  document.getElementById('credit-card').addEventListener('input', validateCreditCard);
  document.getElementById('expiry-month').addEventListener('change', validateExpiry);
  document.getElementById('expiry-year').addEventListener('change', validateExpiry);
  document.getElementById('cvv').addEventListener('input', validateCVV);

  profileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const validFirstName = validateFirstName();
    const validLastName = validateLastName();
    const validGender = validateGender();
    const validHeight = validateHeight();
    const validWeight = validateWeight();
    const validCard = validateCreditCard();
    const validExpiry = validateExpiry();
    const validCVV = validateCVV();

    if (validFirstName && validLastName && validGender && validHeight && validWeight && validCard && validExpiry && validCVV) {
      alert("הפרטים נשמרו בהצלחה!");
    } else {
      alert("אנא תקן את השגיאות בטופס לפני שליחה");
    }
  });
}

// ------------------ FEEDBACK ופונקציות נוספות נשארו זהות ------------------
