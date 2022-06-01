// FF725E;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


    :root {
        --primary-main-color: #FF725E;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 5px;
        background: #000;

    }

    ::-webkit-scrollbar-thumb {
        border-radius: 3rem;
        background: #FF725E;
    }
`;

export default GlobalStyle;
