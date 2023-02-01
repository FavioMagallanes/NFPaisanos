export const dateFormated = (date: Date) => {
  const dateFormated = new Date(date);
  const hours = dateFormated.getHours();
  const minutes = dateFormated.getMinutes();
  const seconds = dateFormated.getSeconds();

  return {
    hours,
    minutes,
    seconds,
  };
};
