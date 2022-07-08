import { Routes, Route } from "react-router-dom";
import Event from "../screens/Event"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/event" element={<Event />} />
    </Routes>
  );
};

