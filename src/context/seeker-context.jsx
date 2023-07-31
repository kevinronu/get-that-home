import { createContext, useEffect, useState } from "react";

import * as favoritesServices from "../services/favorite-service";
import * as contactsServices from "../services/contacts-service";

const SeekerContext = createContext();

function SeekerProvider(props) {
  const [favorites, setFavorites] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    favoritesServices
      .getMyFavorites()
      .then((favorites) => {
        setFavorites(favorites);
      })
      .catch((e) => console.log(e));

    contactsServices
      .getMyContacts()
      .then((contacts) => {
        setContacts(contacts);
      })
      .catch((e) => console.log(e));
  }, []);

  function createFavorite(favoriteData) {
    favoritesServices
      .createFavorite(favoriteData)
      .then((favorite) => {
        const newFavorites = [...favorites, favorite];
        setFavorites(newFavorites);
      })
      .catch(console.log);
  }

  function deleteFavorite(id) {
    favoritesServices
      .deleteFavorite(id)
      .then(() => {
        const newFavorites = favorites.filter((favorite) => favorite.id != id);
        setFavorites(newFavorites);
      })
      .catch(console.log);
  }

  function createContact(contactData) {
    contactsServices
      .createContact(contactData)
      .then((contact) => {
        const newContacts = [...contacts, contact];
        setContacts(newContacts);
      })
      .catch(console.log);
  }

  const value = {
    favorites,
    createFavorite,
    deleteFavorite,
    contacts,
    createContact,
  };

  return <SeekerContext.Provider value={value} {...props} />;
}

export { SeekerProvider, SeekerContext };
