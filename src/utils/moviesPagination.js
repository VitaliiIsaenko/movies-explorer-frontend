export function getColumnSize(width) {
    if (width < 633) {
        return 1;
      } else if (width < 1136) {
        return 2;
      }
      return 3;
}