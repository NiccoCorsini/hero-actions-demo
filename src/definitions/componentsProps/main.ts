import { GenericStatus } from "../general";

export type HomeProps = {
  userId?: string;
  token?: string;
  status: GenericStatus;
};
