import { useSelector } from "react-redux";
import { State } from "../../definitions/store/store";
import Login from "./Login";
import Home from "../main/Home";

const AuthGuard = () => {
  const { status, error, isAuthenticated, userId, token } = useSelector(
    (store: State) => store.auth
  );

  return (
    <>
      {!isAuthenticated ? (
        <Login status={status} error={error} />
      ) : (
        <Home userId={userId} token={token} status={status} />
      )}
    </>
  );
};

export default AuthGuard;
