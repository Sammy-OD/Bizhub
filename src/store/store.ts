import { configureStore } from "@reduxjs/toolkit";
import { ListingSlice } from "./features/listingSlice";

export const store = configureStore({
  reducer: {
    listing: ListingSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch