export default function CapitalizeFirstLetter(
  word: string | string[] | undefined
) {
  if (typeof word !== "string") return " ";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const convertDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-UK", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};
