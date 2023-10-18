import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {RootState} from '../redux/redux-store';
import {Users} from '../components/Users/Users';
import {useAppDispatch} from '../hooks/hooks';
import {setAuthTC} from '../redux/reducers/authReducer';

type MapStateType = {
    isAuth: boolean
}
export function witchRedirectComponent<T>( Component: React.ComponentType<T>) {
    const ContainerComponent = (props: MapStateType) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to={'/login'}/>;
        return <Component {...restProps as T} />
    }
    const mstp = (state: RootState): MapStateType => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mstp)(ContainerComponent)
}