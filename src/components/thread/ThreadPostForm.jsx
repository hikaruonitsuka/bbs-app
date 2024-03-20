import axios from "axios";
import { useState } from "react";
import { BASE_API_URL } from "../../config";

const ThreadPostForm = ({ threadId, mutate }) => {
  const [post, setPost] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${BASE_API_URL}/threads/${threadId}/posts`, {
        post: post,
      });
      setPost("");
      mutate(); // データの再検証を行い、投稿データを更新
    } catch (error) {
      setError(true);
      console.error("投稿に失敗しました。", error);
    }
  };
  return (
    <div className="flex flex-col gap-y-8">
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[200px] border border-slate-300 p-2"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <button className="button" type="submit">
          投稿する
        </button>
      </form>
      {error && (
        <p className="text-center text-red-700">投稿に失敗しました...</p>
      )}
    </div>
  );
};

export default ThreadPostForm;
