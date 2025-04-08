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
      // כאן ניתן להוסיף שליחה לשרת
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
      validateRegPasswordConfirm(); // בדיקה משותפת כדי לעדכן גם את אימות הסיסמה
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
        // כאן ניתן להוסיף שליחה לשרת
      } else {
        alert("אנא תקן את השדות המסומנים באדום");
      }
    });
  }
  
  // ------------------ PROFILE FORM VALIDATION ------------------

function validateFirstName() {
    const firstName = document.getElementById('first-name');
    const msg = document.getElementById('firstNameMsg');
    const regex = /^[א-תa-zA-Z\s]{2,}$/; // לפחות 2 תווים, רק אותיות ורווחים
  
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
    const value = parseInt(height.value);
  
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
    const value = parseInt(weight.value);
  
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
  
  function validateCreditCard() {
    const card = document.getElementById('credit-card');
    const msg = document.getElementById('cardMsg');
    const value = card.value.trim();
  
    // אם השדה ריק – אין צורך בבדיקה, ניתן לאפס את ההודעה
    if (value === "") {
      card.classList.remove('invalid', 'valid');
      msg.textContent = "";
      return true;
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
  
  function validateExpiry() {
    const expiry = document.getElementById('expiry-date');
    const msg = document.getElementById('expiryMsg');
    const value = expiry.value.trim();
  
    if (value === "") {
      expiry.classList.remove('invalid', 'valid');
      msg.textContent = "";
      return true;
    }
  
    if (/^\d{2}\/\d{2}$/.test(value)) {
      expiry.classList.add('valid');
      expiry.classList.remove('invalid');
      msg.textContent = "תוקף תקין";
      msg.classList.add('valid');
      msg.classList.remove('invalid');
      return true;
    } else {
      expiry.classList.add('invalid');
      expiry.classList.remove('valid');
      msg.textContent = "תוקף חייב להיות בפורמט MM/YY";
      msg.classList.add('invalid');
      msg.classList.remove('valid');
      return false;
    }
  }
  
  function validateCVV() {
    const cvv = document.getElementById('cvv');
    const msg = document.getElementById('cvvMsg');
    const value = cvv.value.trim();
  
    if (value === "") {
      cvv.classList.remove('invalid', 'valid');
      msg.textContent = "";
      return true;
    }
  
    if (/^\d{3,4}$/.test(value)) {
      cvv.classList.add('valid');
      cvv.classList.remove('invalid');
      msg.textContent = "CVV תקין";
      msg.classList.add('valid');
      msg.classList.remove('invalid');
      return true;
    } else {
      cvv.classList.add('invalid');
      cvv.classList.remove('valid');
      msg.textContent = "CVV חייב להיות 3 או 4 ספרות";
      msg.classList.add('invalid');
      msg.classList.remove('valid');
      return false;
    }
  }
  
  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    // הוספת מאזינים בזמן אמת
    document.getElementById('first-name').addEventListener('input', validateFirstName);
    document.getElementById('last-name').addEventListener('input', validateLastName);
    document.getElementById('gender').addEventListener('input', validateGender);
    document.getElementById('height').addEventListener('input', validateHeight);
    document.getElementById('weight').addEventListener('input', validateWeight);
    document.getElementById('credit-card').addEventListener('input', validateCreditCard);
    document.getElementById('expiry-date').addEventListener('input', validateExpiry);
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
        // ניתן להוסיף כאן קוד לשליחת הנתונים לשרת
      } else {
        alert("אנא תקן את השגיאות בטופס לפני שליחה");
      }
    });
  }
  // ------------------ FEEDBACK (MASHOV) FORM VALIDATION ------------------

function validateFeedbackName() {
    const nameField = document.getElementById('name');
    const msg = document.getElementById('nameMsg');
    const regex = /^[א-תa-zA-Z\s]{2,}$/; // לפחות 2 תווים – אותיות ורווחים
  
    if (regex.test(nameField.value.trim())) {
      nameField.classList.add('valid');
      nameField.classList.remove('invalid');
      msg.textContent = "שם מלא תקין";
      msg.classList.add('valid');
      msg.classList.remove('invalid');
      return true;
    } else {
      nameField.classList.add('invalid');
      nameField.classList.remove('valid');
      msg.textContent = "שם מלא חייב להכיל לפחות 2 אותיות";
      msg.classList.add('invalid');
      msg.classList.remove('valid');
      return false;
    }
  }
  
  function validateFeedbackEmail() {
    const email = document.getElementById('email');
    const msg = document.getElementById('emailMsg');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (regex.test(email.value.trim())) {
      email.classList.add('valid');
      email.classList.remove('invalid');
      msg.textContent = "אימייל תקין";
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
  
  // פונקציה כללית לבדיקת קבוצת רדיו
  function validateFeedbackRadio(groupName, msgId, fieldName) {
    const radios = document.getElementsByName(groupName);
    const msg = document.getElementById(msgId);
    let isChecked = false;
    for (let radio of radios) {
      if (radio.checked) {
        isChecked = true;
        break;
      }
    }
    if (isChecked) {
      msg.textContent = `${fieldName} נבחר`;
      msg.classList.add('valid');
      msg.classList.remove('invalid');
      return true;
    } else {
      msg.textContent = `אנא בחר/י ${fieldName}`;
      msg.classList.add('invalid');
      msg.classList.remove('valid');
      return false;
    }
  }
  
  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    // האזנה בזמן אמת לשדות טקסט
    document.getElementById('name').addEventListener('input', validateFeedbackName);
    document.getElementById('email').addEventListener('input', validateFeedbackEmail);
  
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const validName = validateFeedbackName();
      const validEmail = validateFeedbackEmail();
      const validRating = validateFeedbackRadio('rating', 'ratingMsg', 'דרוג השירות');
      const validService = validateFeedbackRadio('service', 'serviceMsg', 'רמת שירות הלקוחות');
      const validWebsite = validateFeedbackRadio('website', 'websiteMsg', 'נוחות האתר');
  
      if (validName && validEmail && validRating && validService && validWebsite) {
        alert("המשוב נשלח בהצלחה!");
        // כאן ניתן להוסיף קוד לשליחת המשוב לשרת
      } else {
        alert("אנא תקן את השגיאות בטופס המשוב לפני שליחה");
      }
    });
  }
  // ------------------ TRAINING PROGRESS - ADD ROW FUNCTIONALITY ------------------

const addRowButton = document.getElementById('addRowButton');
if (addRowButton) {
  addRowButton.addEventListener('click', function() {
    // בוחרים את הגוף (tbody) של הטבלה
    const tableBody = document.querySelector('#trainingTable tbody');
    
    // יוצרים שורה חדשה
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td><input type="text" name="exercise" placeholder="שם התרגיל" required></td>
      <td><input type="number" name="weight" placeholder="משקל" required></td>
      <td><input type="number" name="rp" min="1" max="10" placeholder="1-10" required></td>
      <td><input type="number" name="warmup1" placeholder="מס' חזרות"></td>
      <td><input type="number" name="warmup2" placeholder="מס' חזרות"></td>
      <td><input type="number" name="set3" placeholder="חזרה 3"></td>
      <td><input type="number" name="set4" placeholder="חזרה 4"></td>
      <td><input type="number" name="set5" placeholder="חזרה 5"></td>
      <td><input type="number" name="set6" placeholder="חזרה 6"></td>
      <td><input type="number" name="set7" placeholder="חזרה 7"></td>
      <td><button type="button" class="delete-row-button">מחק</button></td>
    `;
    
    // מוסיפים את השורה לטבלת הגוף
    tableBody.appendChild(newRow);
    
    // מוסיפים מאזין למחיקת השורה החדשה
    const deleteButton = newRow.querySelector('.delete-row-button');
    deleteButton.addEventListener('click', function() {
      newRow.remove();
    });
  });
}
