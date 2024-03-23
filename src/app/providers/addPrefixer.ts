import { configApp } from "../config";

export const addPrefixer = (classname: string): string => `${configApp.prefix}${classname}` ;