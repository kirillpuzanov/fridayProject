import React, {useEffect} from 'react';
import './App.css';
import {Header} from './m1-ui/header/Header';
import {Routes} from './m1-ui/routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {Preloader} from './common/Preloader/Preloader';
import {AppStateType} from './m2-bll/store';
import {AppInitialStateType, AuthMe} from './m2-bll/app-reducer';

function App() {
    const {isInitializing} = useSelector<AppStateType, AppInitialStateType>(state => state.app)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AuthMe())
    }, [dispatch])

    if (!isInitializing) return <Preloader/>
    return (
        <div className="App">
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;
