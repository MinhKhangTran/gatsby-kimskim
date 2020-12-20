import { createGlobalStyle } from "styled-components"
import fonts from "./schoolbell.woff"

const Typography = createGlobalStyle`
@font-face {
    font-family:schoolbell;
    src: url(${fonts});
}
html{
    font-family:schoolbell, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
}
`
export default Typography
