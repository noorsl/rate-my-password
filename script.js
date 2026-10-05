// Password Checker
// checks password strength while the user types

let passwordInput = document.getElementById("password");
let showBtn = document.getElementById("showBtn");
let barFill = document.getElementById("barFill");
let result = document.getElementById("result");
let warning = document.getElementById("warning");

// some of the most common (weak) passwords
let commonPasswords = [
  "123456", "12345678", "123456789", "password", "qwerty",
  "111111", "123123", "abc123", "password1", "iloveyou",
  "admin", "welcome", "000000", "1234567890", "qwerty123"
];

// check every time the user types
passwordInput.addEventListener("input", function () {
  let password = passwordInput.value;
  checkPassword(password);
});

// show / hide button
showBtn.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showBtn.textContent = "Show";
  }
});

function checkPassword(password) {
  let score = 0;

  // rule 1: length
  if (password.length >= 8) {
    score++;
    setRule("rule-length", true);
  } else {
    setRule("rule-length", false);
  }

  // rule 2: uppercase letter
  if (/[A-Z]/.test(password)) {
    score++;
    setRule("rule-upper", true);
  } else {
    setRule("rule-upper", false);
  }

  // rule 3: lowercase letter
  if (/[a-z]/.test(password)) {
    score++;
    setRule("rule-lower", true);
  } else {
    setRule("rule-lower", false);
  }

  // rule 4: number
  if (/[0-9]/.test(password)) {
    score++;
    setRule("rule-number", true);
  } else {
    setRule("rule-number", false);
  }

  // rule 5: symbol
  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
    setRule("rule-symbol", true);
  } else {
    setRule("rule-symbol", false);
  }

  // bonus point for long passwords
  if (password.length >= 14) {
    score++;
  }

  // common passwords are always weak
  warning.textContent = "";
  if (commonPasswords.includes(password.toLowerCase())) {
    score = 1;
    warning.textContent = "⚠ This is one of the most common passwords! Change it.";
  }

  showResult(password, score);
}

function setRule(id, passed) {
  let item = document.getElementById(id);
  if (passed) {
    item.classList.add("ok");
  } else {
    item.classList.remove("ok");
  }
}

function showResult(password, score) {
  if (password.length === 0) {
    barFill.style.width = "0%";
    result.textContent = "-";
    return;
  }

  // score is from 0 to 6
  let percent = (score / 6) * 100;
  barFill.style.width = percent + "%";

  if (score <= 2) {
    result.textContent = "Weak 😟";
    barFill.style.backgroundColor = "red";
  } else if (score <= 4) {
    result.textContent = "Medium 😐";
    barFill.style.backgroundColor = "orange";
  } else {
    result.textContent = "Strong 💪";
    barFill.style.backgroundColor = "green";
  }
}
