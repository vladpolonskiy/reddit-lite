import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
} from 'domain/actions/types/news';


const initialState = {
  items: [],
  isFetching: false,
  error: {},
};

export default function news(state = initialState, action) {
  switch (action.type) {
    // REDUCER LOGIN

    case FETCH_NEWS:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
        error: {},
      };

    case FETCH_NEWS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    default:
      return state;
  }
}