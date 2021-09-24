// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"
import "./src/styles/global.css"

// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// gatsby-background-image
// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}