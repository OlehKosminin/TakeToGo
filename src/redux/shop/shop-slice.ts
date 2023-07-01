export {};
// import { createSlice } from "@reduxjs/toolkit";
// import { getProducts, getProductsById } from "./shop-operations";

// interface ProductData {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// interface OrderData {
//   id: number;
//   productId: number;
//   quantity: number;
//   customerId: number;
//   date: string;
// }

// interface ShopState {
//   products: ProductData[];
//   orders: OrderData[];
//   loading: boolean;
//   error: string | null;
// }

// const shopState: ShopState = {
//   products: [],
//   orders: [],
//   loading: false,
//   error: null,
// };

// const shopSlice = createSlice({
//   name: "shops",
//   initialState: shopState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProducts.pending, (store) => {
//         store.loading = true;
//         store.error = "";
//       })
//       .addCase(getProducts.fulfilled, (store, { payload }) => {
//         store.loading = false;
//         store.products = payload.data;
//       })
//       .addCase(getProducts.rejected, (store, { payload }) => {
//         store.loading = false;
//         store.error = payload;
//       })
//       .addCase(getProductsById.pending, (store) => {
//         store.loading = true;
//         store.error = null;
//       })
//       .addCase(getProductsById.fulfilled, (store, { payload }) => {
//         store.loading = false;
//         store.orders = payload.data;
//       })
//       .addCase(getProductsById.rejected, (store, { payload }) => {
//         store.loading = false;
//         store.error = payload;
//       });
//   },
// });
// export default shopSlice.reducer;
