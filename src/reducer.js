import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        numberOfPages: action.payload.numberOfPages,
        hits: action.payload.hits,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID != action.payload),
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        isLoading: false,
        query: action.payload,
        page: 0,
      };
    case HANDLE_PAGE:
      let pageNum;
      if (action.payload === "-") {
        pageNum = state.page - 1;
        if (pageNum < 0) {
          pageNum = state.numberOfPages - 1;
        }
      } else {
        pageNum = state.page + 1;
        if (pageNum > state.numberOfPages - 1) {
          pageNum = 0;
        }
      }

      return {
        ...state,
        page: pageNum,
      };
    default:
      throw new Error(`Unknown action type "${action.type}"`);
  }
};

export default reducer;
