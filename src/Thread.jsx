import { useLocation, useParams } from "react-router-dom";
import Heading from "./components/common/Heading";
import Inner from "./components/common/Inner";
import Loading from "./components/common/Loading";
import Error from "./components/common/Error";
import ThreadPostsList from "./components/thread/ThreadPostsList";
import ThreadPostForm from "./components/thread/ThreadPostForm";
import { useFetchThreadPosts } from "./hooks/useFetchThreadPosts";

const Thread = () => {
  const params = useParams();
  const threadId = params.threadId;

  const { state } = useLocation();
  const { data, error, isLoading, mutate } = useFetchThreadPosts(
    `threads/${threadId}/posts`,
  );

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const posts = data.posts; // データを扱いやすく調整

  return (
    <Inner>
      <div className="flex flex-col gap-y-8">
        <Heading align="left">{state.title}</Heading>
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          <ThreadPostsList posts={posts} />
          <ThreadPostForm threadId={threadId} mutate={mutate} />
        </div>
      </div>
    </Inner>
  );
};

export default Thread;
