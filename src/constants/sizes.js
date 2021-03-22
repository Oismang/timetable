import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const TOP_PADDING = height * 0.05;

export const MONTH_CALENDAR_WIDTH = width;
export const MONTH_CALENDAR_HEIGHT = height * 0.55;

export const WEEK_CALENDAR_WIDTH = width;
export const WEEK_CALENDAR_HEIGHT = height * 0.7;