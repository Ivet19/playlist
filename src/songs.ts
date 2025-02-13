export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty: boolean;

  if (songTitle.length === 0) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let doesExist: boolean;
  if (songTitles.includes(songTitle)) {
    doesExist = true;
  } else {
    doesExist = false;
  }
  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  let isShort: boolean;
  if (songTitle.length < 3) {
    isShort = true;
  } else {
    isShort = false;
  }
  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull: boolean;
  if (songTitles.length >= 5) {
    isFull = true;
  } else {
    isFull = false;
  }
  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount: number;
  songsCount = songTitles.length;
  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "required":
      console.log((errorMessage = "No has introducido ningún título"));
      break;
    case "exists":
      console.log((errorMessage = "La canción ya existe"));
      break;
    case "too-short":
      console.log((errorMessage = "El título es demasiado corto"));
      break;
    case "limit":
      console.log((errorMessage = "La playlist está llena"));
      break;
    default:
      console.log((errorMessage = "La informaicón intruducida no es válida"));
  }
  return errorMessage;
};
