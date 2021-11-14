import { columnSettings } from "./constants";

export function getColumnSize(width) {
  if (width < 633) {
    return columnSettings["small"];
  } else if (width < 1136) {
    return columnSettings["middle"];
  }
  return columnSettings["large"];
}
