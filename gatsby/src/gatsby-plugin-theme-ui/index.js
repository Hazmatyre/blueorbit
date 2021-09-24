/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */

const theme = {
breakpoints: ["640px", "768px", "1024px", "1280px"],
  colors: {
    text: "#fff",
    menucolor: "#374151",
    heading: "#59E19F",
    background: "#000",
    primary: "#008fff",
    secondary: "#ed0e74",
    purple: "#23173c",
    accent: "#8B40AD",
    muted: "#ebebeb",
    light: "#C6C3C9",
    white: "#fff",
    darkpurple: '#23173c',
    darkgrey: '#808080'
  },
  fonts: {
    body:
      '"Inter", sans-serif", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '"Inter", sans-serif' ,
    fontAwesome: "FontAwesome",
  },
  sizes: {
    container: 1280,
  },
  space: [0, 8, 16, 32, 64, 120, 128, 256, 180],
  styles: {
    root: {
      background: "white",
    },
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      lineHeight: "text",
    },
  },
}

export default theme