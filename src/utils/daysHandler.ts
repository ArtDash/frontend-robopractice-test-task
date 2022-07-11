// Types
import { Day } from "../types/users";

type ResultType = Array<{
  DayNumber: number;
  TimeSpent: number;
}>;

export const daysHandler = (days: Array<Day>) => {
  const result: ResultType = Array.from({ length: 31 }, (_, i) => ({
    DayNumber: i + 1,
    TimeSpent: 0,
  }));

  return result.map((item) => {
    const day = days.find(
      (day) => parseInt(day.Date.slice(-2)) === item.DayNumber
    );

    return day ? { ...item, TimeSpent: timeHandler(day) } : item;
  });
};

const timeHandler = (day: Day) => {
  const start =
    parseInt(day.Start.slice(0, 2)) * 60 + parseInt(day.Start.slice(-2));
  const end = parseInt(day.End.slice(0, 2)) * 60 + parseInt(day.End.slice(-2));

  return end - start;
};
