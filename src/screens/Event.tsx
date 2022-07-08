import { useParams } from "react-router-dom";
import { Header, Sidebar, Video } from "../components";

type TParams = {
  slug: string;
};

const EventScreen = () => {
  const { slug } = useParams<TParams>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
};
export default EventScreen;
