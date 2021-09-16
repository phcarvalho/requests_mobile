export const convertToNumber = (value: string) => {
  try {
    return parseFloat(value.replace(",", ".").replace(/[^0-9.,]/gi, ""));
  } catch (error) {
    return 0;
  }
};
