import Inner from "./Inner";
import Error from "./Error";
import Loading from "./Loading";
import Heading from "./Heading";
import { useFetchThreadList } from "../hooks/useFetchThreadList";

const ThreadList = () => {
  const { data, error, isLoading, size, setSize } = useFetchThreadList();

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const threadList = data.flat(); // データを扱いやすく調整
  const isEmpty = threadList.length === 0; // データが空かどうか

  if (isEmpty) {
    return (
      <div className="grid min-h-full place-items-center">
        <Inner>
          <p>まだスレッドが投稿されていません</p>
        </Inner>
      </div>
    );
  }

  return (
    <Inner>
      <div className="flex flex-col gap-y-10">
        <section className="flex flex-col gap-y-8">
          <Heading>新着スレッド</Heading>
          <ul className="flex flex-col gap-y-4">
            {threadList.map((thread) => (
              <li key={thread.id}>
                <a
                  href={`/threads/${thread.id}}`}
                  className="hover block rounded-lg bg-slate-100 p-4 font-bold"
                >
                  {thread.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center ">
            <button className="button" onClick={() => setSize(size + 1)}>
              次のスレッドを読み込む
            </button>
          </div>
        </section>
      </div>
    </Inner>
  );
};

export default ThreadList;
