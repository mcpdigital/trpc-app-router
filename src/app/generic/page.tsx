"use client";
import type { UserData } from "../../types/types"; // Import ApiResponse interface from a shared types file
import ApiFetcher from "../../components/ApiFetcher"; // Import the ApiFetcher component
import { GRAD_GOTHAN_TB } from "../../tw_gradients";
import Image from "next/image";

const API_ENDPOINT_URL = "https://jsonplaceholder.typicode.com/users";

const ApiData = () => {
  const renderData = (data: UserData[]) => (
    <div className={GRAD_GOTHAN_TB + "container  p-4 text-slate-300"}>
      <h1 className="mb-4 text-2xl font-bold">COMPONENT MODE- GitHub Users</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((user) => (
          <div
            key={user.id}
            className={
              " h-[350px] w-[250px] rounded-xl p-6 text-center dark:text-slate-300 text-slate-800 shadow-2xl dark: " +
              GRAD_GOTHAN_TB +
              " bg-slate-400"
            }
          >
            <h2 className=" mt-2 mb-2 text-lg font-semibold">
              {user.username}
            </h2>
            <Image
              src="/black-hole-3-svgrepo-com.svg"
              alt={`Image for ${user.username}`}
              className="rounded-full"
              objectPosition="fill"
              width={250}
              height={1200}
            />
            {user.username}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <ApiFetcher<UserData> endpointUrl={API_ENDPOINT_URL} render={renderData} />
  );
};

export default ApiData;
