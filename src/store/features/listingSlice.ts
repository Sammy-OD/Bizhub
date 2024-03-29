import { createSlice } from "@reduxjs/toolkit";

export interface Listing {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  description: string;
  imageUrls: string[];
}

interface ListingState {
  listings: Listing[]
}

const initialState: ListingState = {
  listings: []
};

export const ListingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    addListing: (state, action) => {
      state.listings.push(action.payload);
    }
  }
});

export const { addListing } = ListingSlice.actions;

export default ListingSlice.reducer;