import { imageUploadData, projects } from "@/lib/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    getProjects: builder.query<projects[], void>({
      query: () => ({
        url: "/projects",
      }),
      providesTags: ["Projects"],
    }),
    getProjectById: builder.query<projects, { id: string }>({
      query: ({ id }) => ({
        url: `/projects/${id}`,
      }),
      providesTags: (result, error, { id }) => [{ type: "Projects", id }],
    }),
    createProject: builder.mutation<string, { title: string }>({
      query: (formData) => ({
        url: "/projects",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Projects"],
    }),
    updateProject: builder.mutation<
      projects,
      Partial<projects> & Pick<projects, "id">
    >({
      query: ({ id, ...otherData }) => ({
        url: `/projects/${id}`,
        method: "PATCH",
        body: otherData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Projects", id },
        "Projects",
      ],
    }),
    deleteProject: builder.mutation<string, { id: string }>({
      query: ({ id }) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),
    uploadImages: builder.mutation<string, imageUploadData>({
      query: ({ id, ...body }) => ({
        url: `/projects/${id}/images`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Projects", id }],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetProjectsQuery,
  useUpdateProjectMutation,
  useGetProjectByIdQuery,
  useDeleteProjectMutation,
  useUploadImagesMutation,
} = projectsApi;
