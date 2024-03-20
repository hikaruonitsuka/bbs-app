import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchThreadPosts = (url) => {
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};
