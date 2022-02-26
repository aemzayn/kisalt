export const _MS_PER_DAY: number = 1000 * 60 * 60 * 24;

export const getDayDifference = (date1: Date, date2: Date) => {
  const utc1 = getUTC(date1);
  const utc2 = getUTC(date2);
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

export const getUTC = (date: Date) => {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
};
