import React from "react";
import { useQuery } from "react-query";

interface ApiFetcherProps<T> {
  endpointUrl: string;
  render: (data: T[]) => React.ReactNode;
}

async function fetchData<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: T[] = await response.json();
  return data;
}

function ApiFetcher<T>({ endpointUrl, render }: ApiFetcherProps<T>) {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<T[]>(endpointUrl, () => fetchData<T>(endpointUrl));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {(error as Error).message}</div>;
  }

  return <>{render(data)}</>;
}

export default ApiFetcher;
