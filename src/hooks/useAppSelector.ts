import {TypedUseSelectorHook, useSelector } from "react-redux";
import { StoreI } from "reducer/schema";
export const useAppSelector:TypedUseSelectorHook<StoreI> = useSelector;
