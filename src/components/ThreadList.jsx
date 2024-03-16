import useSWR from "swr";
import Inner from "./Inner";
import Error from "./Error";
import Loading from "./Loading";
import { fetcher } from "../utils/fetcher";

const ThreadList = () => {
  const { data, error, isLoading } = useSWR("threads", fetcher);

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Inner>
      <section className="flex flex-col gap-y-8">
        <h2 className="text-center text-3xl font-bold text-cyan-900">
          新着スレッド
        </h2>
        <ul className="flex flex-col gap-y-4">
          {data.map((thread) => (
            <li key={thread.id}>
              <a
                href={`/${thread.id}}`}
                className="block rounded-lg bg-slate-100 p-4 font-bold"
              >
                {thread.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Inner>
  );
};

export default ThreadList;
