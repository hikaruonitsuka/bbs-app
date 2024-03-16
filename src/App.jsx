import Header from "./components/Header";
import Footer from "./components/Footer";
import Inner from "./components/Inner";
import ThreadList from "./components/ThreadList";

function App() {
  return (
    <>
      <Header />
      <main className="my-8">
        <Inner>
          <ThreadList />
        </Inner>
      </main>
      <Footer />
    </>
  );
}

export default App;
