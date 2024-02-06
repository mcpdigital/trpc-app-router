"use client";
import type { GHApiResponse } from "../../types/types"; // Import ApiResponse interface from a shared types file
import ApiFetcher from "../../components/ApiFetcher"; // Import the ApiFetcher component
import UserCard from "../../components/appui/GHUserCard"; // Import the UserCard component
import { GRAD_GOTHAN_TB } from "../../tw_gradients";

const API_ENDPOINT_URL = "https://api.github.com/users";

const ApiData = () => {
  const renderData = (data: GHApiResponse[]) => (
    <div className={GRAD_GOTHAN_TB + "container  p-4 text-slate-300"}>
      <h1 className="mb-4 text-2xl font-bold">COMPONENT MODE- GitHub Users</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            tw_string={
              " h-[350px] w-[250px] rounded-xl p-6 text-center dark:text-slate-300 text-slate-800 shadow-2xl dark: " +
              GRAD_GOTHAN_TB +
              " bg-slate-400"
            }
          />
        ))}
      </div>
    </div>
  );

  return (
    <ApiFetcher<GHApiResponse>
      endpointUrl={API_ENDPOINT_URL}
      render={renderData}
    />
  );
};

export default ApiData;
