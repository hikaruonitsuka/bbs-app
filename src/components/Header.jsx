import Inner from "./Inner";

const Header = () => {
  return (
    <header className="bg-cyan-900 py-4 font-bold text-white">
      <Inner>
        <div className="align-center flex justify-between">
          <h1>
            <a href="/" className="hover">
              掲示板
            </a>
          </h1>
          <a href="/" className="hover">
            スレッドを立てる
          </a>
        </div>
      </Inner>
    </header>
  );
};

export default Header;
