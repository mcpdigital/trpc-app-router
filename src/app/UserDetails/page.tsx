import { useSession } from "@clerk/nextjs";
import exp from "constants";

const Home = () => {
  const { isLoaded, session, isSignedIn } = useSession();

  if (!isLoaded) {
    // handle loading state
    return null;
  }
  if (!isSignedIn) {
    // handle not signed in state
    return null;
  }

  return (
    <div>
      <p>
        This session has been active since{" "}
        {session.lastActiveAt.toLocaleString()}
      </p>
    </div>
  );
};
export default Home;
