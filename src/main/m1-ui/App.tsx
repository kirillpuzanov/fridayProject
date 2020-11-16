import React, {useEffect} from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Routes} from './components/routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {Preloader} from './common/Preloader/Preloader';
import {AppStateType} from '../m2-bll/store';
import {AuthMe} from '../m2-bll/app-reducer';

function App() {
    const isInitializing = useSelector<AppStateType, boolean>(state => state.app.isInitializing)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AuthMe())
    },[] )

    if (!isInitializing) return <Preloader/>
    return (
        <div className="App">
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;
