const intervals = [
  { label: "year", seconds: 31536000 },
  { label: "month", seconds: 2592000 },
  { label: "day", seconds: 86400 },
  { label: "hour", seconds: 3600 },
  { label: "minute", seconds: 60 },
  { label: "second", seconds: 1 },
];

const calcTimeAgo = (dateString: string) => {
  const date = Date.parse(dateString);
  const secondsAgo = Math.floor((Date.now() - date) / 1000);
  const interval = intervals.find((el) => el.seconds < secondsAgo);
  // @ts-ignore
  const count = Math.floor(secondsAgo / interval.seconds);

  return `${count} ${interval?.label}${count !== 1 ? "s" : ""} ago`;
};

export default calcTimeAgo;
