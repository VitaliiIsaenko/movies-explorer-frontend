import config from "../config.json";

export function getColumnSize(width) {
  if (width < 633) {
    return config.SMALL_COLUMNS;
  } else if (width < 1136) {
    return config.MIDDLE_COLUMNS;
  }
  return config.LARGE_COLUMNS;
}
