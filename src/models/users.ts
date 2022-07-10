import { createDomain } from "effector";
import { API } from "../service/API";

const usersDomain = createDomain();

export const fetchUsersFx = usersDomain
  .createEffect<void, any>()
  .use(API.getUsers);

export const $users = usersDomain
  .createStore<any>(null)
  .on(fetchUsersFx.doneData, (_, responce) => responce);

$users.watch((state) => console.log(state));
