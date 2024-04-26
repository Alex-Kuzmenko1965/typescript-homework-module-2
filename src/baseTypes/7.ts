/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
let weekend: boolean;

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
};

function isWeekend(day: Day) {
  if (day === Day.Saturday || day === Day.Sunday) {return weekend = true} else {return weekend = false}
};
 
isWeekend(Day.Monday);