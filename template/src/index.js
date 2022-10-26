import React from 'react';
import App from './App';
import './index.css'
import { createRoot } from 'react-dom/client';
import { setAssetPath } from '@esri/calcite-components/dist/components'
import AppContextProvider from './context';

setAssetPath("https://unpkg.com/@esri/calcite-components/dist/calcite/assets")

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>
)


