export const formatNumberByMask = (
  value: string,
  mask: string
): { formattedValue: string; rawValue: string } => {
  const valueNumber = value.replace(/\D+/g, "");

  if (valueNumber === "") {
    return {
      formattedValue: "",
      rawValue: "",
    };
  }

  let lastIndex = 0;
  let maskedValueArr = mask.split("");
  let valueArr: string[] = [];

  valueNumber.split("").forEach((char) => {
    lastIndex = maskedValueArr.indexOf("#", lastIndex);

    if (lastIndex !== -1 && lastIndex !== maskedValueArr.length) {
      maskedValueArr[lastIndex] = char;

      valueArr.push(char);
    }
  });

  const formattedValue = maskedValueArr
    .slice(0, lastIndex !== -1 ? lastIndex + 1 : maskedValueArr.length)
    .join("");

  return {
    formattedValue,
    rawValue: valueArr.join(""),
  };
};
