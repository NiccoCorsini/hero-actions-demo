import { GenericStatus } from "../../general";

export interface AuthSlice {
  isAuthenticated: boolean;
  status: GenericStatus;
  userId?: string;
  token?: string;
  error?: Error;
}
