import { FakeLoginPayload } from "../api/auth";

export type CtcProps = {
  ctcKey: keyof FakeLoginPayload;
};
