import apiFetch from "./api-fetch";

export async function getMyFavorites() {
  return await apiFetch("/favorites");
}

export async function createFavorite(id) {
  return await apiFetch("/favorites", { body: { property_id: id } });
}

export async function deleteFavorite(id) {
  return await apiFetch(`/favorites/${id}`, { method: "DELETE" });
}
