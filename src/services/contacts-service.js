import apiFetch from "./api-fetch";

export async function getMyContacts() {
  return await apiFetch("/contacts");
}

export async function createContact(contactData) {
  return await apiFetch("/contacts", { body: contactData });
}
