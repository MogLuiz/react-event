import { gql, useQuery } from "@apollo/client";
import Lesson from "../Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      title
      lessonType
      id
      slug
      availableAt
    }
  }
`;

type TGetLessonsQueryResponse = {
  lessons: Array<{
    availableAt: string;
    id: string;
    slug: string;
    title: string;
    lessonType: "live" | "class";
  }>;
};

const Siderbar = () => {
  const { data } = useQuery<TGetLessonsQueryResponse>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        <Lesson
          title="Aula 01"
          slug="aula-01"
          availableAt={new Date()}
          type="live"
        />
      </div>
    </aside>
  );
};

export default Siderbar;
