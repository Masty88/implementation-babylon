import React from 'react';
import './App.css'
import BasicScene from "./Components/BasicScene";
import {useDispatch} from "react-redux";
import {setAnimation} from "./redux/animation/animationSlice";

const App = () => {

    return (
            <BasicScene/>
    );
};

export default App;
