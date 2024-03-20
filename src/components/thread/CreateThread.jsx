import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Heading from "../common/Heading";
import Inner from "../common/Inner";
import { BASE_API_URL } from "../../config";

const CreateThread = () => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(`${BASE_API_URL}/threads`, {
        title,
      });
      setTitle("");
      setIsCreated(true);
    } catch (error) {
      console.log(error);
      setIsCreated(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid min-h-full place-items-center">
      <Inner>
        <section className="flex flex-col gap-y-8">
          <Heading>スレッド新規作成</Heading>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
            <input
              type="text"
              className="mx-auto w-full max-w-md border border-slate-300 px-2 py-1"
              placeholder="スレッド名を入力してください"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <div className="flex flex-col items-center gap-y-6">
              <button
                type="submit"
                className="hover button"
                disabled={isLoading}
              >
                {isLoading ? "送信中..." : "スレッドを作成"}
              </button>
              {isCreated !== null &&
                (isCreated ? (
                  <p className="font-bold text-green-700">
                    スレッドの作成が完了しました！
                  </p>
                ) : (
                  <p className="font-bold text-red-700">
                    スレッドの作成に失敗しました...
                  </p>
                ))}
              <Link to="/" className="hover text-sm underline">
                TOPへ戻る
              </Link>
            </div>
          </form>
        </section>
      </Inner>
    </div>
  );
};

export default CreateThread;
