import { auth, currentUser } from "@clerk/nextjs";
import {
  OrganizationMembershipRole,
  SignedInAuthObject,
  User,
} from "@clerk/nextjs/server";
import Image from "next/image";

let orgRole: OrganizationMembershipRole | undefined;

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not logged in

  const { orgId } = auth() as SignedInAuthObject;
  const { userId }: { userId: string | null } = auth();
  console.log("Role=", { orgId });
  console.log("UserID=", { userId });

  if (userId) {
    // Query DB for user specific information or display assets only to logged in users
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements
  if (!user) {
    return <div> No User... </div>;
  } else {
    let dateFormat = new Date().toLocaleDateString("en-GB", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    console.log(dateFormat);

    return (
      <>
        <div className="p-4 ">
          <h1> Email: {user?.emailAddresses[0].emailAddress} </h1>
          <h1> Name: {user?.firstName} </h1>
          <h1> ID: {user?.id} </h1>
          <h1> Role: {orgRole} </h1>
          <h1>
            {" "}
            Date created:{" "}
            {user?.lastSignInAt &&
              new Date(user?.createdAt).toLocaleDateString("en-GB", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}{" "}
          </h1>
          <h1>
            {" "}
            Last sign in:{" "}
            {user?.lastSignInAt &&
              new Date(user?.lastSignInAt).toLocaleDateString("en-GB", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}{" "}
          </h1>
          <Image
            src={user?.externalAccounts[0].imageUrl}
            width="200"
            height={200}
            alt="photo"
          ></Image>
          <h1>
            Today is:{" "}
            {new Date().toLocaleDateString("en-GB", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}{" "}
          </h1>{" "}
          <h1></h1>
        </div>
      </>
    );
  } // Add a closing parenthesis here
}
