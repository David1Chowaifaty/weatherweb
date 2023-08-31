export function determineTimeOfDay() {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 6 && hours < 19;
}
export const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export function formatDate(date) {
  const currentDate = new Date(date);
  const currentDay = currentDate.getDate();
  return `${currentDate.getMonth() + 1}/${currentDay}`;
}
//# sourceMappingURL=utils.js.map
