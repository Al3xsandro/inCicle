import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --background: #eaeeee;
    --light: #ffff;
    --blue: #1010ff;
    --home-page-color: #6969ffeb;
    --banner: #1d7199;
    --social: #575555;
}

@media(max-width: 1080px){
    html {
        font-size: 93.75%;
    }
}

@media(max-width: 720px){
    html {
        font-size: 87.5%;
    }
}
@media(max-height: 650px) {
    html {
        font-size: 93.75%;
    }
}
  
@media(max-height: 600px) {
    html {
        font-size: 85.75%;
    }
}

body {
    background: var(--background);
}
`;