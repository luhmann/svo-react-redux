import { injectGlobal } from 'styled-components'
import { colors } from './variables.js'

// TODO: Right now loaded from Google CDN, consider if this should stay like this
// @font-face
//   font-display "swap"
//   font-family "Yrsa"
//   font-weight 400
//   font-style normal
//   src url('assets/fonts/yrsa-regular-webfont.woff2') format('woff2'),
//       url('assets/fonts/yrsa-regular-webfont.woff') format('woff')

// reset
injectGlobal`
* {
  box-sizing: border-box;
}
/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS and IE text size adjust after device orientation change,
 *    without disabling user zoom.
 */
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: sans-serif;
}
/**
 * Remove default margin.
 */
body {
  margin: 0;
}
/**
 * Remove the gray background color from active links in IE 10.
 */
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
/**
 * Improve readability of focused elements when they are also in an
 * active/hover state.
 */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
`

// typography

injectGlobal`
  body {
    -webkit-font-smoothing: subpixel-antialiased;
  }
`

// some global styles
injectGlobal`
::selection {
  background-color: ${colors.accent};
  color: ${colors.white}; 
}

html {
  -webkit-tap-highlight-color: ${colors.accent};
}
`
