import { useDispatch } from "react-redux";
import { HomeProps } from "../../definitions/componentsProps/main";
import { useCallback } from "react";
import { logoutActionTrigger } from "../../store/actions/auth";
import Loader from "../general/Loader";
import styles from "./Home.module.css";

const Home = ({ token, userId, status }: HomeProps) => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    if (status === "loading") {
      return;
    }
    dispatch(logoutActionTrigger());
  }, [dispatch, status]);

  return (
    <div>
      <h1>Home</h1>
      <p className={styles.paragraph}>
        The side effects management through saga has dispatched all actions in
        the login flow, populating the reducer state with the payloads received
        from the API response. <br /> Below are the data retrieved from the
        reducer module.
      </p>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span>
            <strong>UserID: </strong>
          </span>
          <span>{token || "No token available"}</span>
        </div>
        <div className={styles.info}>
          <span>
            <strong>UserToken: </strong>
          </span>
          <span>{userId || "No userId available"}</span>
        </div>
      </div>
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
      <Loader status={status} />
    </div>
  );
};

export default Home;
