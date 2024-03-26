import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from "./Pages/i18next"; // Проверьте, что путь к файлу i18n.js правильный

import "../Components/Style/eng/Index__eng.scss";

function LanguageSwitcher() {
    const { t, i18n: i18nInstance } = useTranslation();

    const changeLanguage = (language) => {
        i18nInstance.changeLanguage(language);
    };

    // Определите текущий активный язык
    const activeLanguage = i18nInstance.language;

    return (
        <div>
            <a className={`ww1 ${activeLanguage === 'eng' ? 'active' : ''}`} href="" onClick={() => changeLanguage('eng')}>eng</a>
            <a className={`ww2 ${activeLanguage === 'rus' ? 'active' : ''}`} href="" onClick={() => changeLanguage('rus')}>rus</a>
        </div>
    );
}

export default LanguageSwitcher;
