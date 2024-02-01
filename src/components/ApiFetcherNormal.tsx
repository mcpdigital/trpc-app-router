import React, { useEffect, useState } from "react";

interface ApiFetcherProps<T> {
  endpointUrl: string;
  render: (data: T[]) => React.ReactNode;
}

function ApiFetcherNormal<T>({ endpointUrl, render }: ApiFetcherProps<T>) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpointUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: T[] = (await response.json()) as T[];
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    void fetchData();
  }, [endpointUrl]);

  return <>{render(data)}</>;
}

export default ApiFetcherNormal;
