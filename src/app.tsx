import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from "./styles/global";
import { Routes } from './routes';

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
               <Routes/> 
            </BrowserRouter>
        </>
    );
};