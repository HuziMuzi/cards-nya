import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./m2-bll/store/store";
import Main from "./m1-ui/main/Main";
import Header from "./m1-ui/main/header/Header";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <Main/>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
