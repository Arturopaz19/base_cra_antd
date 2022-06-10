/* eslint-disable @typescript-eslint/no-empty-interface */
import { Action } from "redux";
/**
 * User
 */
import User, { UserI } from "./user_s";

/**
 * Store
 */
export interface StoreI {
  user: UserI
}

export interface ActionI extends Action {
  type: string;
  payload: unknown | any;
}

export default ({
  User
});
