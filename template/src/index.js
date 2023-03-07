import React from 'react';
import App from './App';
import './index.css'
import { createRoot } from 'react-dom/client';
import { setAssetPath } from '@esri/calcite-components/dist/components'
import AppContextProvider from './context';

setAssetPath("https://js.arcgis.com/calcite-components/1.0.7/assets");

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>
)


