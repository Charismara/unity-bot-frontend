import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './app/App';
import {Provider} from "react-redux";
import {store} from "./app/store/store";
import * as serviceWorker from "./serviceWorker";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationsEn from './translation/en.json'
import translationsDe from './translation/de.json'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: translationsEn
            },
            de: {
                translation: translationsDe
            }
        },
        interpolation: {escapeValue: false},
        fallbackLng: 'en'
    })

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

serviceWorker.unregister();
