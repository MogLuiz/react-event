import { Header, Sidebar, Video } from "../components";

const EventScreen = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex flex-1">
      <Video />
      <Sidebar />
    </main>
  </div>
);
export default EventScreen;
