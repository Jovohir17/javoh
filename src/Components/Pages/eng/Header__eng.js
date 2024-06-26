import React from 'react';
import {useTranslation} from 'react-i18next'; // Импортируем useTranslation
import i18n from "../i18next";
import LanguageSwitcher from "../../LanguageSwitcher";

function Header__eng() {
    const {t} = useTranslation(); // Получаем функцию t для перевода текстов

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <div className="dd">
             <header>

                    <nav>
                        <div className="nav__item">
                            <div className="ff" >
                                  <p><a className="a" href="#">JT</a></p>
                            </div>

                            <div className="launges">
                                <LanguageSwitcher/>
                            </div>
                        </div>
                    </nav>

                    <div className="header__item">
                        <h1>{t('header.title')}</h1> {/* Пример перевода заголовка */}
                        <div className="text1">
                            <div className="circle"></div>
                            <h2>{t('header.text1')}</h2> {/* Пример перевода текста 1 */}
                        </div>

                        <div className="text2">
                            <div className="circle"></div>
                            <h2>{t('header.text2')}</h2> {/* Пример перевода текста 2 */}
                        </div>

                        <div className="text3">
                            <div className="circle"></div>
                            <h2>{t('header.text3')}</h2> {/* Пример перевода текста 3 */}
                        </div>
                    </div>

                    <div className="contacts__ico">
                        <div className="telegram">
                            <a href="https://t.me/jaavoh"><img src="./imgs/icons/telegram.png" alt="Telegram"/></a>
                        </div>

                        <div className="instagram">
                            <a href="https://github.com/Jovohir17"><img src="./imgs/icons/github.png" alt="github"/></a>
                        </div>
                    </div>


                    <div className="ii">
                        <img className="oblako1" src="./imgs/oblaka1.png" alt=""/>
                            <div className="imggg">
                                <img className="oblako2" src="./imgs/oblaka2.png" alt=""/>
                                <img className="programmer" src="./imgs/programmer.png" alt=""/>
                                <img className="pc" src="./imgs/pc.png" alt=""/>
                                <img className="pce" src="./imgs/Laptop 1.png" alt=""/>
                                <img className="Code1" src="./imgs/Code1.png" alt=""/>
                                <img className="Code2" src="./imgs/Code2.png" alt=""/>
                                <img className="Mobile" src="./imgs/Mobile.png" alt=""/>
                            </div>
                    </div>


            </header>
            </div>
        </>
    );
}

export default Header__eng;
