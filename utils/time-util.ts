
import moment from 'moment';

/**
 * Wednesday, May 6th
 *
 * @see https://momentjs.com/
 */
export const getWeekDayFormat = (date: Date) => {
  // moment(date).format('MMMM Do YYYY, h:mm:ss a'); // May 7th 2024, 6:27:20 pm
  return moment(date).format('dddd MMM Do');
}

export const getStartOfDay = (date: Date) => {
  return moment(date).startOf("day").format('YYYY-MM-DD HH:mm:ss');
}

export const getEndOfDay = (date: Date) => {
  return moment(date).endOf("day").format('YYYY-MM-DD HH:mm:ss');
}


/**
 * 2024-05-07
 */
export const getFullDate = (date: Date) => {
  return moment(date).format('YYYY-MM-DD');
}


