import React, { useCallback, useState } from "react";
import { FakeLoginPayload } from "../../definitions/api/auth";
import { useDispatch } from "react-redux";
import { loginActionTrigger } from "../../store/actions/auth";
import { LoginProps } from "../../definitions/componentsProps/auth";
import { fakeCredentials } from "../../api/auth";
import Loader from "../general/Loader";
import styles from "./Login.module.css";
import Ctc from "../general/Ctc";

const Login = ({ status, error }: LoginProps) => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState<FakeLoginPayload>({
    username: "",
    password: "",
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCredentials((oldCredentials) => ({ ...oldCredentials, [name]: value }));
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (status === "loading") {
        return;
      }
      dispatch(loginActionTrigger(credentials));
    },
    [dispatch, credentials, status]
  );

  return (
    <div>
      <h1 className={styles.title}>Login</h1>
      <p className={styles.paragraph}>
        Use the following credentials to test the login. <br /> You can also
        intentionally enter incorrect information to test error handling. <br />
        Open the console to monitor the flow of actions with redux-logger.
      </p>
      <div className={styles.ctcWrapper}>
        {(Object.keys(fakeCredentials) as (keyof FakeLoginPayload)[]).map(
          (key) => (
            <Ctc ctcKey={key} key={key} />
          )
        )}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label className={styles.label} htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your username..."
            autoComplete="name"
            value={credentials.username}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password..."
            autoComplete="current-password"
            value={credentials.password}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className="button">
          LOGIN
        </button>
      </form>
      <Loader status={status} />
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};

export default Login;
