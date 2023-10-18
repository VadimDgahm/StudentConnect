import React, {FC, useState} from 'react';
import styles from './user.module.css';
import {UserType} from '../../../redux/reducers/usersReducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {Avatar, Button, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import {useAppDispatch} from '../../../hooks/hooks';
import {setAuthTC} from '../../../redux/reducers/authReducer';

type UserPropsType = {
    user: UserType,
    followed: (id: number) => void
    changeCurrentPage: (pageNumber: number) => void
}
const  User: FC<UserPropsType> = ({user, followed, changeCurrentPage}) => {
    const [disabledButton, setDisabledButton] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const followedFriends = () => {
        setDisabledButton(true)
        if (user.followed) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                {withCredentials: true})
                .then(res => {
                    followed(user.id)

                })
                .catch((err) => {
                    dispatch(setAuthTC())
                })
                .finally(() => {
                setDisabledButton(false)
            })
        } else {
            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {},
                {withCredentials: true})
                .then(res => {
                    followed(user.id)
                }).catch((err) => {
                    debugger
                    dispatch(setAuthTC())
                })
                .finally(() => {
                setDisabledButton(false)
            })
        }

    }
    return (<div>
        <NavLink className={styles.link} onClick={() => changeCurrentPage(1)} to={'/profile/' + user.id}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.photos.small ? user.photos.small : 'https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg'} />
                </ListItemAvatar>
                <ListItemText
                    primary={user.name}
                />
            </ListItem>
        </NavLink>
            <Button size={'small'} onClick={followedFriends} variant="contained" disabled={disabledButton}>
                {user.followed ? <span><AccessibilityIcon/>Unfollowed</span> : <span><EmojiPeopleRoundedIcon/>Followed</span>}
            </Button>
        </div>
    );

}

export default User;
