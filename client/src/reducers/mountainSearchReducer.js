import { SEARCH_MOUNTAINS, CLEAR_SEARCH_MOUNTAINS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_MOUNTAINS:
      return action.payload;
    case CLEAR_SEARCH_MOUNTAINS:
    console.log(action.payload, action.type);
      return action.payload;
    default:
      return state;
  }
}
