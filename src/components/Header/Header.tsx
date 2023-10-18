import styles from './header.module.css'
import {useApp, useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {selectors} from '../../utils/Selectors';
import {getMeUserTC, logoutTC} from '../../redux/reducers/authReducer';
import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {getUserTC} from '../../redux/reducers/profileReducer';

export const Header = () => {
    const [isVisibleWindow, setIsVisibleWindow] = useState(false)
    const isAuth = useAppSelector(selectors.isAuth)
    const userData = useAppSelector(selectors.userData)
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        setIsVisibleWindow(false)
        dispatch(logoutTC())
    }

    return (
        <header className={styles.header}>

            <img className={styles.imgLogo}
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png'}/>
            <div className={styles.btn}>
                {isAuth ? <div className={styles.link} onClick={() => setIsVisibleWindow(true)}>{userData.fullName}</div> :
                    <NavLink className={styles.link} to={'login'}>Login</NavLink>}
                {isVisibleWindow && <WindowUserMenu imgUser={userData.photos.small} setVisible={setIsVisibleWindow} userLogin={userData.fullName}
                                                    onClickHandler={onClickHandler}/>}
            </div>
        </header>
    )
}
type WindowUserMenuType = {
    onClickHandler: () => void,
    userLogin: string | null
    setVisible: (value: boolean) => void
    imgUser: string
}
const WindowUserMenu: React.FC<WindowUserMenuType> = ({onClickHandler,imgUser, userLogin, setVisible}) => {
    const onMouseLeaveHandler = () => {
        setTimeout(() => setVisible(false), 1000)
    }

    return <div className={styles.window} onMouseLeave={onMouseLeaveHandler}>
        <div className={styles.nameImgBlock}><NavLink className={styles.link} to={'profile'}>{userLogin}</NavLink>
            <img className={styles.imgUser} src={imgUser ? imgUser : 'https://sneg.top/uploads/posts/2023-06/1687806563_sneg-top-p-avatarka-zaglushka-pinterest-4.png'} alt=""/></div>
        <button onClick={onClickHandler}>Log out</button>
    </div>
}

