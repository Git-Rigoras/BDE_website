import CalendarDates from "calendar-dates";

const calendarDates = new CalendarDates();

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

type CalendarDay = {
  date: number;
  iso: string;
  type: string;
};

const Calendar = async () => {
  const dates: Array<CalendarDay> = await calendarDates.getDates(new Date());
  console.log(dates);

  return (
    <div className="grid grid-cols-7">
      {dates.map((date, index) => (
        <div key={index}>
          {date.type} {date.iso}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
