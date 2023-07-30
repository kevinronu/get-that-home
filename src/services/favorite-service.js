import apiFetch from "./api-fetch";

export async function getMyFavorites() {
  return await apiFetch("/favorites");
}

export async function createFavorite(favorite_data) {
  return await apiFetch("/favorites", { body: favorite_data });
}

export async function deleteFavorite(id) {
  return await apiFetch(`/favorites/${id}`, { method: "DELETE" });
}
