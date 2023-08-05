import apiFetch from "./api-fetch";

export async function getMyContacts() {
  return await apiFetch("/contacts");
}

export async function createContact(id) {
  return await apiFetch("/contacts", { body: { property_id: id } });
}
