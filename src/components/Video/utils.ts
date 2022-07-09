import { gql } from "@apollo/client";

export const GET_LESSON_BY_SLUG_QUERY = gql`
query GetLessonBySlug($slug: String) {
  lesson(where: { slug: $slug }) {
    title
    id
    teacher {
      avatarURL
      bio
      name
    }
    description
  }
}
`;
