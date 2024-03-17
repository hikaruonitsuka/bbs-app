import useSWRInfinite from "swr/infinite";
import Inner from "./Inner";
import Error from "./Error";
import Loading from "./Loading";
import { fetcher } from "../utils/fetcher";

const getOffset = (pageOffset, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/threads?offset=${pageOffset * 10 + 1}`;
};

const ThreadList = () => {
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    getOffset,
    fetcher,
    {
      initialSize: 1,
    },
  );

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
          <h2 className="text-center text-3xl font-bold text-cyan-900">
            新着スレッド
          </h2>
          <ul className="flex flex-col gap-y-4">
            {threadList.map((thread) => (
              <li key={thread.id}>
                <a
                  href={`/${thread.id}}`}
                  className="hover block rounded-lg bg-slate-100 p-4 font-bold"
                >
                  {thread.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center ">
            <button
              className="hover rounded-lg bg-cyan-900 px-4 py-2 font-bold text-white"
              onClick={() => setSize(size + 1)}
            >
              次のスレッドを読み込む
            </button>
          </div>
        </section>
      </div>
    </Inner>
  );
};

export default ThreadList;
