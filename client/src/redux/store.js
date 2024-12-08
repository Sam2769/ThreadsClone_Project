import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./slice";
import { serviceApi } from "./service";
export const store = configureStore({
  reducer: {
    service: serviceReducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      serviceApi.middleware
    ),
});
