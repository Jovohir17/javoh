import React from 'react';
import {useTranslation} from 'react-i18next'; // Импортируем useTranslation из react-i18next
import '../../Style/eng/Index__eng.scss';


function Footer__eng() {
    const {t} = useTranslation(); // Используем хук useTranslation для получения функции перевода t

    return (
        <>
            <div className="dd">
                <footer>
                    <div className="center">
                    <h2>{t('footer.contactNetworks')}</h2> {/* Используем функцию t для перевода текста */}
                    </div>
                    <div data-aos="fade-down"
                         data-aos-anchor-placement="top-bottom"
                         data-aos-duration="2000"
                         className="d-flexxx">
                        <a href="https://t.me/joha_17">
                            <div className="telegram">
                                <img src="../imgs/icons/telegram.png" alt="1"/>
                            </div>
                        </a>
                        <a href="https://github.com/Jovohir17">
                            <div className="instagram">
                                <img src="../imgs/icons/github.png" alt="2"/>
                            </div>
                        </a>
                        <a href="https://discord.gg/wFwh4mqn">
                            <div className="discord">
                                <img src="../imgs/icons/discord.png" alt="3"/>
                            </div>
                        </a>
                        <a href="mailto:javohhx@gmail.com">
                            <div className="gmail">
                                <img src="../imgs/icons/gmail.png" alt="4"/>
                            </div>
                        </a>
                    </div>

                    <div className="nn">
                        <div className="text__about">
                            <h3>{t('footer.innovativeDesignFunctionality')}</h3>
                        </div>

                        <div className="text__about2">
                            <h3>{t('footer.professionalDevelopment')}</h3>
                        </div>

                        <div className="text__about3">
                            <h3>{t('footer.designInFigma')}</h3>
                        </div>
                    </div>


                    <div className="d-ff">
                        <img className="Coder1" src="../imgs/Coder1.png" alt=""/>
                        <img className="Coder2" src="../imgs/Coder2.png" alt=""/>
                    </div>

                    <div class="df2">
                        <p><span>©</span> vastiv.uz <span>, All Right Reserved.</span></p>

                        <p class="design">Designed   By <span class="name"> <a href="https://joha.vercel.app/">Tursunov Jovohir </a></span></p>
                    </div>


                </footer>
            </div>
        </>
    );
}

export default Footer__eng;
