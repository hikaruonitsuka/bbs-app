import Header from "./components/Header";
import Footer from "./components/Footer";
import ThreadList from "./components/ThreadList";

function App() {
  return (
    <>
      <Header />
      <main className="my-8">
        <ThreadList />
      </main>
      <Footer />
    </>
  );
}

export default App;
