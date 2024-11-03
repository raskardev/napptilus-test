import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Employee, EmployeesResponse } from "./types";

if (!import.meta.env.VITE_BASE_URL) {
  throw new Error("BASE_URL is not set");
}

export const employeesApiSlice = createApi({
  reducerPath: "employeesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (build) => ({
    getEmployees: build.query<EmployeesResponse, number>({
      query: (page: number) => `/?page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newData) => {
        currentCache.current = newData.current;
        currentCache.total = currentCache.total + newData.total;
        currentCache.results.push(...newData.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getEmployee: build.query<Employee, number>({
      query: (id: number) => `/${id}`,
    }),
  }),
});

export const { useGetEmployeesQuery, useGetEmployeeQuery } = employeesApiSlice;
