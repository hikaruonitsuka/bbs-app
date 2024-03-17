import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThreadList from "./components/ThreadList";
import NotFound from "./components/NotFound";
import CreateThread from "./components/CreateThread";

function App() {
  return (
    <>
      <Header />
      <main className="my-8">
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/thread/new" element={<CreateThread />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
