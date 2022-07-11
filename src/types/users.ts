export type Users = Array<User>;

type User = {
  id: number;
  Fullname: string;
  Days: Array<Day>;
};

export type Day = {
  Date: string;
  End: string;
  Start: string;
};
