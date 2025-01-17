import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }

        return {
          url: "/tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (options) => ({
        url: `/task/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    updateTask: builder.mutation({
      query: (options) => ({
        url: `/task/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

// Export the hooks for the defined endpoints
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTaskMutation,
} = baseApi;
export default baseApi;
