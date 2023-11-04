const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weeks = ["S", "M", "T", "W", "T", "F", "S"];

var myHtml = "";
var month = "";
var column = "";
var row = "";
var row1 = "";
var temp = "";

// var input = prompt("Enter the year");

const renderCalendar = (date, currYear, currMonth) => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  let liTag = '<ul class="days">';

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === new Date().getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currMonth += 1;
  return liTag;
};

var yearInput = prompt("Enter year");
let date = new Date(yearInput, 0),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
console.log(date);

var yearInput = (document.getElementById("yearInput").innerHTML = currYear);
for (var j = 0; j < 12; j++) {
  month += `<h4>${months[j]}</h4><hr><div class="weeks">`;
  weeks.map((w) => {
    temp = weeks
      .map(function (a) {
        return `<span>${a}</span>`;
      })
      .join("");
  });

  month += temp;
  month +=
    '</div><hr style="border: none;border-top: 3px dotted black; color: black;background-color: #fff;height: 1px;width: 99%;">';

  let monthName = document.getElementById(months[j]);
  month += renderCalendar(date, currYear, j);
  monthName.innerHTML = month;
  month = "";
}
