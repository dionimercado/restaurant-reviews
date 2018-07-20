import { FETCHED_PLACES } from "../actions/types";

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCHED_PLACES:
      return { ...state, places: action.places };

    default:
      return state;
  }
};
