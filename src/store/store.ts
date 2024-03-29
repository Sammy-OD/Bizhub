import { configureStore } from "@reduxjs/toolkit";
import { ListingSlice } from "./features/listingSlice";
import { AuthSlice } from "./features/authSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    listing: ListingSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch