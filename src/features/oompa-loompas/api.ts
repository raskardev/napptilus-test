import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Employee, EmployeesResponse } from "./types";

if (!import.meta.env.VITE_BASE_URL) {
  throw new Error("BASE_URL is not set");
}

const ONE_DAY = 24 * 60 * 60;

export const oompaLoompaApi = createApi({
  reducerPath: "oompaLoompaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (build) => ({
    getOompaLoompas: build.query<EmployeesResponse, void>({
      query: () => "/",
    }),
    getOompaLoompa: build.query<Employee, void>({
      query: (id) => `/${id}`,
    }),
  }),
  keepUnusedDataFor: ONE_DAY,
});

export const { useGetOompaLoompasQuery, useGetOompaLoompaQuery } =
  oompaLoompaApi;
