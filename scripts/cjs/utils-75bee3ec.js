'use strict';

function determineTimeOfDay() {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 6 && hours < 19;
}
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function formatDate(date) {
  const currentDate = new Date(date);
  const currentDay = currentDate.getDate();
  return `${currentDate.getMonth() + 1}/${currentDay}`;
}

exports.daysOfWeek = daysOfWeek;
exports.determineTimeOfDay = determineTimeOfDay;
exports.formatDate = formatDate;

//# sourceMappingURL=utils-75bee3ec.js.map