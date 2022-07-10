import { fetchUsers } from "../utils/fetchUsers";

export class API {
  static getUsers = () => fetchUsers("http://localhost:8080/api/users");
}
