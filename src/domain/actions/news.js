import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
} from './types/news';
import { fetchNews as fetchNewsRequest } from 'domain/api/news';

export const fetchNews = () => {
  return dispatch => {
    dispatch({ type: FETCH_NEWS });
    const queryParams = { limit: 25 };
    fetchNewsRequest(queryParams)
      .then(res => res.json())
      .then(result => {
        const { data: { children } } = result;
        dispatch({ type: FETCH_NEWS_SUCCESS, payload: children });
      })
      .catch(err => {
        dispatch({ type: FETCH_NEWS_ERROR, error: err });
      });
  }
};

export const fetchNewsSuccess = (data) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: data,
});

export const fetchNewsError = (err) => ({
  type: FETCH_NEWS_ERROR,
  error: err,
});