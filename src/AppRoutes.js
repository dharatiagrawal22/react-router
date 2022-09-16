import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default AppRoute;
