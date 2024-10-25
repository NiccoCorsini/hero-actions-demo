import { LayoutProps } from "../../definitions/componentsProps/layout";
import styles from "./Layout.module.css";
import { gitHubPathD, heroActionsLogo, npmLogo } from "../../assets/icons";
import { gitHubPage, npmPage } from "../../assets/links";
import SvgIcon from "./SvgIcon";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.hero}>
        <img src={heroActionsLogo} alt="hero-actions-logo" />
        <h1>hero-actions</h1>
      </div>
      <div className={styles.childWrapper}>
        {children}

        <a
          className={styles.gitHubLink}
          href={gitHubPage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgIcon width={36} pathD={gitHubPathD} />
        </a>
        <a
          className={styles.npmLink}
          href={npmPage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={npmLogo} alt="npm-logo" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
