import React, {Component} from 'react';
import Eng from "./Components/Pages/eng";
import {Routes,Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Eng/>}/>
                </Routes>
            </>
        );
    }
}

export default App;

