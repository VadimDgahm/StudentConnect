import {ThunkDispatch} from 'redux-thunk';
import {ActionTypes, RootState} from '../redux/redux-store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AnyAction} from 'redux';
import {useEffect} from 'react';
import {setAuthTC} from '../redux/reducers/authReducer';
import {getUsersTC} from '../redux/reducers/usersReducer';
import {UsersPropsType} from '../components/Users/Users';

export type AppDispatch = ThunkDispatch<RootState, unknown,AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>() //для санок
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const useApp = () => {
    const isInitialized = useAppSelector(state=>state.auth.isInitialized);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setAuthTC())
    }, []);
    return {
        isInitialized
    }
}

export const useUsers = (props: UsersPropsType) => {
    let pageUsers = Math.ceil(props.totalUserCount / props.pageSize )
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    useEffect(() => {
        dispatch(getUsersTC(props.currentPage,props.pageSize))
    }, [props.currentPage])

    let pages: number[] = []
    for (let i = 1;  i <= pageUsers ; i++) {
        pages.push(i)
    }
    const onClickChangeCurrenPage = (value: number) => {
        props.changeStatusPreloader(true)
        props.changeCurrentPage(value)
    }
    return {
        pageUsers,
        onClickChangeCurrenPage,
        isAuth
    }
}