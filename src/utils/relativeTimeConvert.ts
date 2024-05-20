// utils/relativeTime.js
import { formatDistanceToNow, parseISO } from 'date-fns';

export const getRelativeTime = (dateString: string) => {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};
