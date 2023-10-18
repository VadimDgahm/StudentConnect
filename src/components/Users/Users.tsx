import React, {FC, useEffect, useState} from 'react';
import styles from './usersComponent.module.css'
import {getUsersTC, UserType} from '../../redux/reducers/usersReducer';
import axios from 'axios';
import Prealoder from '../Prealoder/Prealoder';
import { List, Pagination} from '@mui/material';
import User from './User/User';
import { useUsers} from '../../hooks/hooks';
import {Redirect} from 'react-router-dom';

export type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    followed: (id: number) => void
    setUsers: (users: UserType[]) => void
    currentPage: number
    changeCurrentPage: (pageNumber: number) => void
    setTotalCount: (numberUsers: number) => void
    isPreloader: boolean
    changeStatusPreloader: (isPreloader: boolean) => void
}
export const Users: FC<UsersPropsType> = (props) => {
    const {pageUsers, onClickChangeCurrenPage} = useUsers(props)
    return (
        <>
            <><div>
                <Pagination onChange={(e, value) => onClickChangeCurrenPage(value)} count={pageUsers} size="small" />
            </div>
                {props.isPreloader && <Prealoder/>}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'none' }}>
                    {props.users.map(u => <User changeCurrentPage={props.changeCurrentPage} key={u.id} user={u} followed={props.followed}/>)}
                </List>
            </>
        </>
    );
}
