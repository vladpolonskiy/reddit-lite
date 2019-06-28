import fetch from 'cross-fetch';
import { apiUrl } from 'constants/api';
import { encodeQueryData } from 'domain/utils'; 

export const fetchNews = (params) => {
  const queryParams = encodeQueryData(params);
  return fetch(`${apiUrl}${params ? ('?' + queryParams) : ''}`);
};