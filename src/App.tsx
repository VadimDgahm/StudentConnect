import './App.css';
import {Header} from './components/Header/Header';
import {Navigate} from './components/Navigate/Navigate';
import Profile from './components/Profile/Profile';
import { Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {RootState} from './redux/redux-store';
import {setAuthAC, StateAuthReducerType} from './redux/reducers/authReducer';
import {Dispatch} from 'redux';
import Logo from './components/LOGO/Logo';
import {useApp} from './hooks/hooks';

type AppType = StateAuthReducerType & mapDispatchToPropsType
const App = (props: AppType) => {

const {isInitialized} = useApp()
    return (
        <div className={'containerAPP'}>
            {!isInitialized
                ? <div className={'logoApp'}><Logo/></div>
                : <><div className="App">
                        <Header/>
                        <Navigate/>
                        <div className="app_wrapper">
                            <Route path={'/profile/:userId?'} render={() => <Profile/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                        </div>
                    </div>

                    </>
            }

        </div>
    );
}
const mapStateToProps = (state: RootState):StateAuthReducerType => {
    return state.auth
}
type mapDispatchToPropsType = {
    setAuth: (email: string, id: number, login: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        setAuth: (email: string, id: number, login: string) => dispatch(setAuthAC(email,id,login))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
