import { usersData } from "./mocks";
import { fakeApi, getRandomInt } from "./faker";

export const loadUsersApi = async () => await fakeApi(usersData);
export const updateUserApi = async (user) => await fakeApi(user);
export const deleteUserApi = async (user) => await fakeApi(user);
export const searchUserApi = async (keyword) => await fakeApi(usersData.filter(user => user.email.includes(keyword) || user.first_name.includes(keyword) || user.last_name.includes(keyword)));
export const addUserApi = async (user) => {
  const id = `${getRandomInt(100)} ${new Date()}`;
  return await fakeApi({ ...user, id });
};
