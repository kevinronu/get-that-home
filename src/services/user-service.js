import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function createUser(userData) {
  const { token, ...user } = await apiFetch("/user", {
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await apiFetch("/user");

  return user;
}

export async function updateUser(userData, id) {
  let dataCleaned = Object.fromEntries(
    Object.entries(userData).filter(([k, v]) => v !== "")
  );
  const { token, ...user } = await apiFetch(`/users/${id}`, {
    method: "PATCH",
    body: dataCleaned,
  });

  return user;
}
