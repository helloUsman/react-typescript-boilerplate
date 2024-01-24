const theme = {
  colors: {
    white: "#eaeaea",
    black: "#251e1e"
  },
  borders: {
    dropdown: "1px solid #a0a9b9",
    dropdownItem: "1px solid #e7e9ed"
  },
  zIndex: {
    dropdown: 2000
  }
} as const;

export type Theme = typeof theme;

export default theme;
