export function getFormattedDate(dateString: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [, month, day] = dateString.split("-");

  // Make sure to convert the month to a number (January is month 0, February is month 1, etc.)
  const formattedMonth = months[parseInt(month, 10) - 1];
  const formattedDay = day[0] === "0" ? day[1] : day;

  return `${formattedMonth} ${formattedDay}`;
}
