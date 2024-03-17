import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid min-h-full place-items-center text-center">
      <section className="flex flex-col gap-y-8">
        <h2 className="text-3xl font-bold text-red-700">
          お探しのページが見つかりませんでした。
        </h2>
        <div className="flex flex-col items-center gap-y-8">
          <p>
            申し訳ございませんが、お探しのページは存在しないか、移動した可能性があります。
          </p>
          <Link to="/" className="button">
            TOPへ戻る
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
