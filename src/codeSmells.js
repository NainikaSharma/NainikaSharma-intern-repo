/* eslint-disable no-unused-vars */
// // Magic Numbers & Strings
// function calculateDiscount(price) {
//   return price * 0.15; // 0.15 is unclear
// }

// // Long Function
// function processUser(user) {
//   console.log("Checking user...");
//   console.log(user.name);

//   if (user.age >= 18) {
//     console.log("Adult user");
//   }

//   console.log("Saving user...");
//   console.log("Sending email...");
//   console.log("Updating database...");
// }

// // Duplicate Code
// function addUser(user) {
//   console.log("Saving user:", user);
//   console.log("Sending notification");
// }

// function addAdmin(admin) {
//   console.log("Saving user:", admin);
//   console.log("Sending notification");
// }

// // Deeply Nested Conditional
// function checkAccess(user) {
//   if (user) {
//     if (user.loggedIn) {
//       if (user.role === "admin") {
//         return "Access granted";
//       }
//     }
//   }

//   return "Access denied";
// }

// // Inconsistent Naming
// const x = "Nainika";
// const user_age = 21;

// console.log(x, user_age);

// // Commented-Out Code

// // function oldLogin() {
// //   console.log("Old login system");
// // }

const DISCOUNT_RATE = 0.15;
const ADMIN_ROLE = 'admin';

// Magic Number fixed
function calculateDiscount(price) {
  return price * DISCOUNT_RATE;
}

// Long Function fixed
function displayUser(user) {
  console.log(user.name);
}

function checkUserAge(user) {
  return user.age >= 18;
}

function saveUser(user) {
  console.log('Saving user...');
}

function sendEmail() {
  console.log('Sending email...');
}

function updateDatabase() {
  console.log('Updating database...');
}

function processUser(user) {
  displayUser(user);

  if (checkUserAge(user)) {
    console.log('Adult user');
  }

  saveUser(user);
  sendEmail();
  updateDatabase();
}

// Duplicate Code fixed
function notifyUser(user) {
  console.log('Saving user:', user);
  console.log('Sending notification');
}

function addUser(user) {
  notifyUser(user);
}

function addAdmin(admin) {
  notifyUser(admin);
}

// Deep nesting fixed
function checkAccess(user) {
  if (!user || !user.loggedIn) {
    return 'Access denied';
  }

  if (user.role !== ADMIN_ROLE) {
    return 'Access denied';
  }

  return 'Access granted';
}

// Naming improved
const userName = 'Nainika';
const userAge = 21;

console.log(userName, userAge);
