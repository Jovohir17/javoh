import React, { useState, useEffect } from 'react';
import './Preloader.css'; // Подключаем стили

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    // Эмуляция задержки загрузки
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Время задержки загрузки в миллисекундах (здесь 3000 миллисекунды или 3 секунды)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loading-screen ${loading ? '' : 'hidden'}`}>
            <h1>PLEASE</h1>
            <h1>WAIT</h1>
            <h1>A MOMENT</h1>
        </div>
    );
};

export default Preloader;
