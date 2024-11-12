import { newsApi } from "@entities/news/api/api";
import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "@entities/news/model/slice";
import { categoriesApi } from "@entities/categories/api/api";

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
