import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const screenWidth = width;
export const screenHeight = height;

export const TOP_PADDING = height * 0.05;

export const ONE_DAY_CALENDAR_WIDTH = width;
export const ONE_DAY_CALENDAR_HEIGHT = height * 0.7;

export const THREE_DAYS_CALENDAR_WIDTH = width;
export const THREE_DAYS_CALENDAR_HEIGHT = height * 0.7;

export const WEEK_CALENDAR_WIDTH = width;
export const WEEK_CALENDAR_HEIGHT = height * 0.7;

export const MONTH_CALENDAR_WIDTH = width;
export const MONTH_CALENDAR_HEIGHT = height * 0.55;
