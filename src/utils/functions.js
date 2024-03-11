export const textShorter = (text, position = 28) => {
  const data = text.slice(0, position);
  if (data.length > position - 1) {
    return `${data}...`;
  } else {
    return `${data}`;
  }
};
