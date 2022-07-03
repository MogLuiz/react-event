import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

type TLesson = {
  id: string
  title: string
}

function App() {
  const { data } = useQuery<{lessons: TLesson[]}>(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map(({ id, title }) => {
        return <li>{title}</li>;
      })}
    </ul>
  );
}

export default App;
