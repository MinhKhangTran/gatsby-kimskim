import { createGlobalStyle } from "styled-components"
import bg from "../assets/i-like-food.svg"

const Background = createGlobalStyle`
:root{
    --lila:#8272a7;
}
html::after{
    content:"";
    background-image:url(${bg});
    background-repeat:repeat;
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    z-index:-1;
    opacity:0.05;
    
}
.gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
`

export default Background
