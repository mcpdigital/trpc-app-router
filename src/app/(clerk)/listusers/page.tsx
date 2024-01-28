import React from "react";
import { useUser } from "@clerk/nextjs";

const CurrentUser = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>No user is signed in.</div>;
  }

  return (
    <div>
      <h2>Current User:</h2>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default CurrentUser;
