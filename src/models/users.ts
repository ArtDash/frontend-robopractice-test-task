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

export const searchTerm = usersDomain.createEvent<string>("");

export const $users = usersDomain
  .createStore<Users | null>(null)
  .on(fetchUsersFx.doneData, (_, responce) => responce);

export const $preparedUsers = $users.map((state) =>
  state?.map((user) => ({
    ...user,
    newDays: daysHandler(user.Days),
    totalTimeSpent: daysHandler(user.Days).reduce(
      (total, { TimeSpent }) => TimeSpent + total,
      0
    ),
  }))
);
// .on(searchTerm, (state, payload) =>
//   state?.filter((item) => item.Fullname.includes(payload))
// );

// export const $preparedUsers = usersDomain
//   .createStore<Users | null>(null)
//   .on($users, (_, payload) => payload);

// sample({
//   // clock: fetchUsersFx.doneData,
//   // filter: ({ Fullname }, searchTerm ) => Fullname.includes(searchTerm),
//   source: $users,

//   fn: (users) => users?.map((user) => (
//     { ...user, newDays: daysHandler(user.Days)}
//     )),

//   target: $preparedUsers,
// })

$preparedUsers.watch((state) => console.log(state));
