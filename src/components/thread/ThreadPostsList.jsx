const ThreadPostsList = ({ posts }) => {
  const isEmpty = posts.length === 0; // データが空かどうか
  return (
    <>
      {isEmpty ? (
        <div>まだ投稿されていません。</div>
      ) : (
        <div className="max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-y-8">
            {posts.map((content) => (
              <div className="rounded-lg bg-slate-100 p-4" key={content.id}>
                <p>{content.post}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ThreadPostsList;
