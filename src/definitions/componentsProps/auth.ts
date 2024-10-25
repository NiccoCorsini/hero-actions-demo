import { GenericStatus } from "../general";

export type LoginProps = {
  status: GenericStatus;
  error?: Error;
};
