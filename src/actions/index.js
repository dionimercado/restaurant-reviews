import { FETCHED_PLACES } from "./types";

export const fetchedPlaces = places => ({
  type: FETCHED_PLACES,
  payload: places
});
