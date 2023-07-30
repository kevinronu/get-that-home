import apiFetch from "./api-fetch";

export async function getMyContacts() {
  return await apiFetch("/contacts");
}

export async function createContact(contact_data) {
  return await apiFetch("/contacts", { body: contact_data });
}

export async function deleteContact(id) {
  return await apiFetch(`/contacts/${id}`, { method: "DELETE" });
}
