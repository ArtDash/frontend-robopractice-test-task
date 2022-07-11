export type Users = Array<User>;
export type PreparedUsers = Array<PreparedUser>;

type User = {
  id: number;
  Fullname: string;
  Days: Array<Day>;
  newDays: Array<PreparedDays>;
  totalTimeSpent: number;
};

type PreparedUser = {
  id: number;
  Fullname: string;
  Days: Array<Day>;
  newDays: Array<PreparedDays>;
  totalTimeSpent: number;
};

export type Day = {
  Date: string;
  End: string;
  Start: string;
};

export type PreparedDays = {
  DayNumber: number;
  TimeSpent: number;
};
