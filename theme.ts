import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Roboto, sans-serif",
  primaryColor: "custom",
  colors: {
    custom: [
      "#e6faf8",
      "#ccf5f1",
      "#99ebe5",
      "#66e1d8",
      "#33d7cc",
      "#1ec8bb",
      "#18a096",
      "#127872",
      "#0c504d",
      "#062827",
    ],
  },
  defaultRadius: "md",
});
