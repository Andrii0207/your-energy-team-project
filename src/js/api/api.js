import axios from 'axios';
import {
  BASE_URL,
  DEFAULT_EXERCISES_LIMIT,
  DEFAULT_FILTER_LIMIT,
} from './config';

const api = axios.create({
  baseURL: BASE_URL,
  params: {},
});

//---------------Filters---------------------------------------------------------------
export const getFilteredList = async (filter, page = 1) => {
  const response = await api.get('/filters', {
    params: {
      filter,
      page,
      limit: DEFAULT_FILTER_LIMIT,
    },
  });
  return response.data;
};

export const getMusclesList = async (page = 1) => {
  const response = await api.get('/filters', {
    params: {
      filter: 'Muscles',
      page,
      limit: DEFAULT_FILTER_LIMIT,
    },
  });
  return response.data;
};

export const getBodyPartsList = async (page = 1) => {
  const response = await api.get('/filters', {
    params: {
      filter: 'Body parts',
      page,
      limit: DEFAULT_FILTER_LIMIT,
    },
  });
  return response.data;
};

export const getEquipmentList = async (page = 1) => {
  const response = await api.get('/filters', {
    params: {
      filter: 'Equipment',
      page,
      limit: DEFAULT_FILTER_LIMIT,
    },
  });
  return response.data;
};

//------------------------------------------------------------------------------
//
//
//
//
//------------------Quote------------------------------------------------------------
export const getQuoteOfTheDay = async () => {
  const response = await api.get('/quote');
  return response.data;
};
//------------------------------------------------------------------------------
//
//
//
//
//------------------Exercises------------------------------------------------------------
export const getExercises = async (
  { bodypart, muscles, equipment, search },
  page = 1
) => {
  const checkedSearch =
    search && !bodypart && !muscles && !equipment ? '' : search;

  const response = await api.get('/exercises', {
    params: {
      bodypart: bodypart || '',
      muscles: muscles || '',
      equipment: equipment || '',
      keyword: checkedSearch || '',
      page,
      limit: DEFAULT_EXERCISES_LIMIT,
    },
  });
  return response.data;
};

export const getExerciseById = async id => {
  const response = await api.get(`/exercises/${id}`);
  return response.data;
};

export const setExerciseRating = async (id, data) => {
  const response = await api.patch(`/exercises/${id}/rating`, data);
  return response.data;
};
//------------------------------------------------------------------------------
//
//
//
//
//------------------Subscription-----------------------------------------------------------
export const createSubscription = async data => {
  const response = await api.post('/subscription', data);
  return response.data;
};
