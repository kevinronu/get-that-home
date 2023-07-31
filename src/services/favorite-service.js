import apiFetch from "./api-fetch";

export async function getMyFavorites() {
  return await apiFetch("/favorites");
}

export async function createFavorite(favoriteData) {
  return await apiFetch("/favorites", { body: favoriteData });
}

export async function deleteFavorite(id) {
  return await apiFetch(`/favorites/${id}`, { method: "DELETE" });
}
