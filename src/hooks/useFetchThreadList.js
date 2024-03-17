import useSWRInfinite from "swr/infinite";
import { fetcher } from "../utils/fetcher";

export const getOffset = (pageOffset, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/threads?offset=${pageOffset * 10}`;
};

export const useFetchThreadList = () => {
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    getOffset,
    fetcher,
    {
      initialSize: 1,
    },
  );
  return { data, error, isLoading, size, setSize };
};
