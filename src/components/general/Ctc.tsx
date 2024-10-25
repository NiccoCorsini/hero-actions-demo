import { useCallback, useState } from "react";
import { FakeLoginPayload } from "../../definitions/api/auth";
import { fakeCredentials } from "../../api/auth";
import { copyPathD } from "../../assets/icons";
import SvgIcon from "./SvgIcon";
import styles from "./Ctc.module.css";
import { CtcProps } from "../../definitions/componentsProps/ctc";

const Ctc = ({ ctcKey }: CtcProps) => {
  const [copyStatus, setCopyStatus] = useState<
    Record<keyof FakeLoginPayload, string>
  >({
    username: "",
    password: "",
  });

  const changeCopyStatus = (text: string, key: keyof FakeLoginPayload) =>
    setCopyStatus((oldStatus) => ({ ...oldStatus, [key]: text }));

  const handleCopy = useCallback(
    (text: string, key: keyof FakeLoginPayload) => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          changeCopyStatus("Copied!", key);
          setTimeout(() => changeCopyStatus("", key), 1000);
        })
        .catch((err) => {
          changeCopyStatus("Error!", key);
          console.error("Copy error: ", err);
        });
    },
    []
  );

  return (
    <div className={styles.ctc}>
      <div className={styles.ctcHeader}>
        <span>{ctcKey}</span>
        <div
          className={styles.ctcButton}
          onClick={() => handleCopy(fakeCredentials[ctcKey], ctcKey)}
        >
          <SvgIcon width={12} pathD={copyPathD} />
          <div>CopyTC</div>
        </div>
        {copyStatus && <span>{copyStatus[ctcKey]}</span>}
      </div>
      <div className={styles.board}>
        <span>{fakeCredentials[ctcKey]}</span>
      </div>
    </div>
  );
};

export default Ctc;
