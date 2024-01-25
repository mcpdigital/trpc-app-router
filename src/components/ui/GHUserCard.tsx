import React from "react";
import Image from "next/image";
import type { GHApiResponse } from "../../types/types"; // Import ApiResponse interface from a shared types file

interface UserCardProps {
  user: GHApiResponse; // Pass a single user data to the component
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="m-auto mb-4 h-[350px] w-[250px] break-inside-avoid break-words rounded-xl p-6 text-center text-slate-300 shadow-lg dark:bg-slate-800">
      <h2 className="mb-2 text-lg font-semibold">{user.login}</h2>
      <Image
        src={user.avatar_url}
        alt={`Image for ${user.login}`}
        className="rounded-full"
        objectPosition="fill"
        width={250}
        height={1200}
      />
      <a
        href={user.html_url}
        className="break-inside-auto break-words text-sm text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {user.html_url}
      </a>
    </div>
  );
};

export default UserCard;
