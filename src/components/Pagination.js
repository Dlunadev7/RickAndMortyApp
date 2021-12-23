import { scrollToTop } from "../helpers/scrollToTop";

export const onPrevious = (info, fetchCharacters) =>{
  fetchCharacters(info.prev);
  scrollToTop()
}

export const onNext = (info, fetchCharacters) =>{
  fetchCharacters(info.next);
  scrollToTop()
}  
