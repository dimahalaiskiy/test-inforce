import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASEURL = 'https://623b50e02e056d1037f0cdbf.mockapi.io/product-list/';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => 'products',
      providesTags: (result) => ['Post'],
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: 'products',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
    editProduct: build.mutation({
      query: (body) => ({
        url: `products/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
