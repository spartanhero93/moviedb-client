import { genreList } from "./genresList";
import NoImage2 from "../icons/404-notfound.png";

export const getImageUrl = (item) => {
  const imgURL = "https://image.tmdb.org/t/p/w500";

  if (item.poster_path) {
    return imgURL + item.poster_path;
  } else if (item.profile_path) {
    return imgURL + item.profile_path;
  } else {
    return NoImage2;
  }
};

export const returnOnlyYear = (date) => date.split("").splice(0, 4);

export const getGenreFromId = (itemGeneres) => {
  let genres = [];
  itemGeneres.sort((a, b) => a - b);
  genreList.map((obj) =>
    itemGeneres.map((item) => (obj.id === item ? genres.push(obj) : null))
  );
  if (genres.length > 3) {
    return genres.splice(0, 3);
  } else {
    return genres;
  }
};
