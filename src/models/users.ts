import { createDomain, sample } from "effector";

// API
import { API } from "../service/API";

// Types
import { Users } from "../types/users";

// Helpers
import { daysHandler } from "../utils/daysHandler";

const usersDomain = createDomain();

export const fetchUsersFx = usersDomain
  .createEffect<void, Users>()
  .use(API.getUsers);

export const searchTerm = usersDomain.createEvent<string>();

export const $search = usersDomain
  .createStore<string>("")
  .on(searchTerm, (_, payload) => payload);

export const $users = usersDomain.createStore<Users | null>(null);

export const $preparedUsers = $users.map((state) => state);

sample({
  clock: fetchUsersFx.doneData,

  fn: (state) =>
    state.map((user) => ({
      ...user,
      newDays: daysHandler(user.Days),
      totalTimeSpent: daysHandler(user.Days).reduce(
        (total, { TimeSpent }) => TimeSpent + total,
        0
      ),
    })),

  target: $users,
});

sample({
  //@ts-ignore
  clock: searchTerm,
  source: $users,

  fn: (users, searchTerm) =>
    users?.filter((item) => item.Fullname.toLowerCase().includes(searchTerm)),

  target: $preparedUsers,
});

$preparedUsers.watch((state) => console.log(state));
