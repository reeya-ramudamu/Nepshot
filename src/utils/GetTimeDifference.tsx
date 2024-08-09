export const getTimeDifference = (newsDate: string | Date): string => {
  const currentDate = new Date();
  const publishedDate = new Date(newsDate);
  const timeDifference = currentDate.getTime() - publishedDate.getTime();

  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference =
    currentDate.getMonth() -
    publishedDate.getMonth() +
    12 * (currentDate.getFullYear() - publishedDate.getFullYear());
  const yearsDifference =
    currentDate.getFullYear() - publishedDate.getFullYear();

  if (secondsDifference < 60) {
    if (secondsDifference === 1) return "a second ago";
    return `${secondsDifference} seconds ago`;
  } else if (minutesDifference < 60) {
    if (minutesDifference === 1) return "a minute ago";
    return `${minutesDifference} minutes ago`;
  } else if (hoursDifference < 24) {
    if (hoursDifference === 1) return "an hour ago";
    return `${hoursDifference} hours ago`;
  } else if (daysDifference < 30) {
    if (daysDifference === 1) return "a day ago";
    return `${daysDifference} days ago`;
  } else if (monthsDifference < 12) {
    if (monthsDifference === 1) return "a month ago";
    return `${monthsDifference} months ago`;
  } else {
    if (yearsDifference === 1) return "a year ago";
    return `${yearsDifference} years ago`;
  }
};
