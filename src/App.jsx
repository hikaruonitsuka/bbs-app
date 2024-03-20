import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ThreadList from "./components/thread/ThreadList";
import NotFound from "./components/common/NotFound";
import CreateThread from "./components/thread/CreateThread";
import Thread from "./Thread";

function App() {
  return (
    <>
      <Header />
      <main className="my-8">
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/thread/new" element={<CreateThread />} />
          <Route path="/threads/:threadId" element={<Thread />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
