const Error = ({ error }) => {
  return (
    <>
      <div className="grid min-h-full place-items-center text-center">
        <section className="flex flex-col gap-y-8">
          <h2 className="text-3xl font-bold text-red-700">
            エラーが発生しました！
          </h2>
          <div>
            <p>{error.response.data.ErrorMessageJP}</p>
            <p>{error.response.data.ErrorMessageEN}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Error;
