import { createDomain } from "effector";

// API
import { API } from "../service/API";

// Types
import { Users } from "../types/users";

const usersDomain = createDomain();

export const fetchUsersFx = usersDomain
  .createEffect<void, Users>()
  .use(API.getUsers);

export const $users = usersDomain
  .createStore<Users | null>(null)
  .on(fetchUsersFx.doneData, (_, responce) => responce);

$users.watch((state) => console.log(state));
