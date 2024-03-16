import Header from "./components/Header";
import Footer from "./components/Footer";
import Inner from "./components/Inner";

function App() {
  return (
    <>
      <Header />
      <main>
        <Inner>
          <section>
            <h2>新着スレッド</h2>
            <ul>
              <li>
                <a href="/">
                  <p>推しについて語るスレ</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <p>推しについて語るスレ</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <p>推しについて語るスレ</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <p>推しについて語るスレ</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <p>推しについて語るスレ</p>
                </a>
              </li>
              <li>
                <a href="/">
                  <p>推しについて語るスレ</p>
                </a>
              </li>
            </ul>
          </section>
        </Inner>
      </main>
      <Footer />
    </>
  );
}

export default App;
