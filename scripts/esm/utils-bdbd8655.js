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

export { determineTimeOfDay as a, daysOfWeek as d, formatDate as f };

//# sourceMappingURL=utils-bdbd8655.js.map