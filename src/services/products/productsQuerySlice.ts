import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { ProductsQuery } from './products.model';

export const initialState: ProductsQuery = {
  searchValue: '',
  active: false,
  promo: false,
  limit: 8,
  page: 1,
};

export const productsQuerySlice = createSlice({
  name: 'productsQuery',
  initialState,
  reducers: {
    searchValue: (state, action: PayloadAction<string>) => {
      state.page = 1;
      state.searchValue = action.payload;
    },
    isPromo: (state, action: PayloadAction<boolean, string>) => {
      state.page = 1;
      state.promo = action.payload;
    },
    isActive: (state, action: PayloadAction<boolean>) => {
      state.page = 1;
      state.active = action.payload;
    },
    currentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    limit: (state, action: PayloadAction<number>) => {
      state.page = 1;
      state.limit = action.payload;
    },
  },
});

export const { searchValue, isPromo, isActive, currentPage, limit } = productsQuerySlice.actions;
export const selectQuery = (state: RootState) => state.productsQuery;

export default productsQuerySlice.reducer;
