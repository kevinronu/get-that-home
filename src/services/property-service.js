import apiFetch from "./api-fetch";
import apiFetchWithImage from "./api-fetch-with-image";

export async function getProperties() {
  return await apiFetch("/properties");
}

export async function getMyProperties() {
  return await apiFetch("/my_properties");
}

export async function getProperty(propertyId) {
  return await apiFetch(`/properties/${propertyId}`);
}

export async function createProperty(propertyData) {
  return await apiFetchWithImage(`/properties`, { body: propertyData });
}

export async function updateProperty(propertyData, propertyId) {
  let dataCleaned = Object.fromEntries(
    Object.entries(propertyData).filter(([, v]) => v !== "")
  );

  return await apiFetch(`/properties/${propertyId}`, {
    method: "PATCH",
    body: dataCleaned,
  });
}

export async function restoreProperty(propertyId) {
  return await apiFetch(`/properties/${propertyId}`, {
    method: "PATCH",
    body: { close: false },
  });
}

export async function closeProperty(propertyId) {
  return await apiFetch(`/properties/${propertyId}`, {
    method: "PATCH",
    body: { close: true },
  });
}

export async function deleteProperty(propertyId) {
  return await apiFetch(`/properties/${propertyId}`, { method: "DELETE" });
}
