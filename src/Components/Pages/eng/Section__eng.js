import React, {Component} from 'react';
import '../../Style/eng/Index__eng.scss';
import {useTranslation} from "react-i18next";
import i18n from "../i18next"; // Или другой корректный путь




function Section__eng() {

    const { t } = useTranslation(); // Получаем функцию t для перевода текстов

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
        return (
            <>
                <div className="dd">
                    <section>
                        <hr/>

                        <div className="tt">
                            <h2 className="h22">{t('section.projects')}</h2>
                        </div>

                        <div className="d-flexx">
                            <div className="div1">

                            </div>

                            <div className="div2">

                            </div>

                        </div>


                        <div className="d-flexx">
                            <div className="card1">
                                <div className="ddw">
                                    <h2>Alum house</h2>
                                </div>
                                    <img src="./imgs/Dream-House.png" alt=""/>


                                    <h3>{t('section.Burger')}</h3>


                                <div className="button__link">
                                    <div className="dd1">

                                    </div>

                                    <a href="https://alumhouse.ru/">

                                        <button>
                                            {t('section.read')}
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="card2">


                                <div className="ddw">
                                    <h2>Vastiv Clean</h2>
                                </div>

                                <div className="center">
                                    <img src="../imgs/cleaning.png" alt=""/>
                                </div>

                                <h3>
                                {t('section.medicines')}
                                </h3>
                                <div className="button__link">
                                    <div className="dd1">

                                    </div>

                                    <a href="https://atlas-beta-rust.vercel.app/">
                                        <button>
                                            {t('section.read')}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="d-flexx">
                            <div className="div3">

                            </div>

                            <div className="div4">

                            </div>

                        </div>


                        <div className="d-flexx">
                            <div className="card3">
                                <div className="ddw">
                                    <h2>Converter</h2>
                                </div>
                                <img src="../imgs/converter.png" alt=""/>
                                <h3>
                                {t('section.medicines2')}
                                </h3>
                                <div className="button__link">
                                    <div className="dd1">

                                    </div>

                                    <a href="https://convertersimg.com/">

                                        <button>
                                            {t('section.read')}

                                        </button>
                                    </a>
                                </div>

                            </div>

                            <div className="card4">
                                <div className="ddw">
                                    <h2>Backend KZ</h2>
                                </div>
                                <img src="./imgs/gyper.png" alt=""/>
                                <h3>
                                {t('section.pizza')}
                                </h3>
                                <div className="button__link">
                                    <div className="dd1">

                                    </div>

                                    <a href="https://www.gyper.kz/">

                                        <button>
                                            {t('section.read')}
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="more">
                            <h3 className="all">{t('section.not')}</h3>
                        </div>

                        <div className="moree">
                            <h3>{t('section.soon')}</h3>
                        </div>

                        <hr/>
                    </section>
                </div>



            </>
        );
}

export default Section__eng;