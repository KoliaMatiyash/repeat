//1.Через витік із бака охолодження щодня витікає 10% налитої води. При об'ємі води менше,
// ніж 10 літрів виникає аварійна ситуація. Створіть програму, яка запитує у користувача
// початковий обсяг води і розраховує, на скільки днів роботи цього вистачить.
// function HowMuchDays(litr) {
//   let day = 0;
//   let losses = litr;
//   while (losses >= 10) {
//     losses -= losses * 0.1;
//     day++;
//   }
//   return day;
// }
// let HowMuchLitrs = prompt("Введіть обсяг води(в лутрах): ");
// if (HowMuchLitrs <= 0) {
//   confirm("Некоректно введені дані");
// } else {
//   confirm(`Води вистачить на ${HowMuchDays(HowMuchLitrs)} днів`);
// }
// 2.Створіть функцію numbers(), яка підраховуватиме кількість переданих числових аргументів.
// Наприклад, numbers(1, 2, "a") поверне значення 2, numbers(true, 2, false) -1, numbers() — 0.
// function numbers(...valus) {
//   let corectNumber = 0;
//   for (let valu of valus) {
//     if (typeof valu === "number") {
//       corectNumber++;
//     }
//   }
//   return corectNumber;
// }
// console.log(numbers(6, 2, "u"));
// 4.Створити об'єкт "Квиток у кіно" і визначити всі його властивості.
// const movieTicket = {
//   nameMove: "IT",
//   hall: 3,
//   row: 10,
//   seat: 16,
//   time: "19:45",
//   data: "15-01-2017",
// };
// 5.Створити об'єкт "проект". Він має назву, наприклад, FaceBook.
// У нього є розробник, у якого є ім'я, прізвище і адреса, а в адреси є країна та місто.
// const probject = {
//   name: "Facebook",
//   developer: {
//     firstName: "Марк",
//     lastName: "Цукерберг",
//     address: {
//       country: "Америка",
//       city: "LA",
//     },
//   },
// };
// 6.Створити функцію для копіювання об'єкта користувача.
// Користувач має ім'я та прізвище.
// Функція приймає такий об'єкт і повертає його копію, а не посилання.
// function copy(user) {
//   return Object.assign({}, user);
// }
// const user = {
//   firstName: "Іван",
//   lastName: "Іванов",
// };
// let copyUser = copy(user);
// console.log(copyUser);
// copyUser.firstName = "Микола";
// console.log(user);
// console.log(copyUser);
// 8.Створити функцію-конструктор User, яка буде зберігати наступну
// інформацію про користувача:
// повне ім'я, вік, стать, електронну пошту, країну проживання,
// заробітну плату, посаду, відділ; Створити масив користувачів (10 штук).
function User(
  fullName,
  age,
  gender,
  email,
  countryLiving,
  salary,
  position,
  department
) {
  this.fullName = fullName;
  this.age = age;
  this.gender = gender;
  this.email = email;
  this.countryLiving = countryLiving;
  this.salary = salary;
  this.position = position;
  this.department = department;
}
//Використав ChatGPT для згенерування даних про користувачів
let users = [
  new User(
    "Іван Петренко",
    30,
    "чоловік",
    "ivan.petrenko@gmail.com",
    "Україна",
    1500,
    "Інженер",
    "Технічний відділ"
  ),
  new User(
    "Ольга Коваль",
    25,
    "жінка",
    "olga.koval@example.com",
    "Молдова",
    1200,
    "Менеджер",
    "Відділ продажів"
  ),
  new User(
    "Андрій Шевченко",
    35,
    "чоловік",
    "andriy.shevchenko@gmail.com",
    "Україна",
    2000,
    "Керівник",
    "Відділ розробки"
  ),
  new User(
    "Катерина Лісова",
    28,
    "жінка",
    "kateryna.lisova@example.com",
    "Польща",
    1800,
    "Дизайнер",
    "Креативний відділ"
  ),
  new User(
    "Микола Вітренко",
    40,
    "чоловік",
    "mykola.vitrenko@gmail.com",
    "Україна",
    2500,
    "Директор",
    "Адміністрація"
  ),
  new User(
    "Олена Соколова",
    22,
    "жінка",
    "olena.sokolova@example.com",
    "Україна",
    1100,
    "Аналітик",
    "Маркетинговий відділ"
  ),
  new User(
    "Петро Вовк",
    45,
    "чоловік",
    "petro.vovk@example.com",
    "Україна",
    3000,
    "Фінансовий директор",
    "Фінансовий відділ"
  ),
  new User(
    "Аліна Кузнєцова",
    33,
    "жінка",
    "alina.kuznetsova@example.com",
    "Франція",
    1700,
    "HR менеджер",
    "Відділ персоналу"
  ),
  new User(
    "Василь Левченко",
    29,
    "чоловік",
    "vasyl.levchenko@gmail.com",
    "Україна",
    1600,
    "Програміст",
    "IT відділ"
  ),
  new User(
    "Марія Зубко",
    31,
    "жінка",
    "maria.zubko@gmail.com",
    "Україна",
    1400,
    "Офіс-менеджер",
    "Адміністрація"
  ),
];
// // 9.Отримати користувачів, у яких електронна пошта закінчується на "@gmail.com"
// // (Масив користувачів).
// function findEmail(users) {
//   return users.filter((user) => user.email.endsWith("@gmail.com"));
// }
// const emailUser = findEmail(users);
// // 10.Отримати електронні пошти всіх повнолітніх жінок, не старших 30 років,
// // що проживають в Україні (Масив рядків).
// function findAge(users) {
//   return users
//     .filter(
//       (user) =>
//         user.gender === "жінка" &&
//         user.age >= 18 &&
//         user.age <= 30 &&
//         user.countryLiving === "Україна"
//     )
//     .map((user) => user.email);
// }
// const acceptableUsers = findAge(users);
// // 11.Отримати всі вікові показники повнолітніх чоловіків (Масив чисел).
// function adultMan(users) {
//   return users
//     .filter((user) => user.age >= 18 && user.gender === "чоловік")
//     .map((user) => user.age);
// }
// console.log(adultMan(users));
// 12.Знайти найстаршого користувача (Користувач).
// ! НЕ ДОРОБЛЕНО
// function oldestUser(users) {
//   return (
//     users.reduce((acum, user) => {
//       if (user.age > acum.age) {
//         return user;
//       } else {
//         return acum;
//       }
//     }),
//     users[0]
//   );
// }
// console.log(oldestUser(users));
