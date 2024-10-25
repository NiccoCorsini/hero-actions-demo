import { LoaderProps } from "../../definitions/componentsProps/loader";
import styles from "./Loader.module.css";

const Loader = ({ status }: LoaderProps) => {
  return (
    <div
      className={`${styles.loaderContainer} ${
        status === "loading" ? "" : styles.hidden
      }`}
    >
      <span className={styles.loader}></span>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
